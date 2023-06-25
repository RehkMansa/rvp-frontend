import PriceChart from '@/Molecules/Chart/PriceChart';
import './index.css';
import { CrosshairMode, Time, createChart } from 'lightweight-charts';
import { useRef, useState } from 'react';
import useSingleEffect from '@/hooks/useSingleEffect';
import ChartTopBar from '@/Atoms/ChartAtoms/ChartTopBar';
import VolumeChart from '@/Molecules/Chart/VolumeChart';
import { OrderBOOK, formatOrders } from '@/consts';
import OrderBook from '@/Molecules/OrderBook';

const chartOptions = {
	height: 300,
	timeScale: {
		timeVisible: true,
		secondsVisible: false,
	},
	autoSize: true,
	layout: {
		background: {
			color: '#20252b',
		},
		textColor: '#A7B1BC',
		fontFamily: 'Satoshi, Ubuntu, Arial, sans-serif',
		fontWeight: 500,
	},
	grid: {
		vertLines: {
			color: '#1C2127',
		},
		horzLines: {
			color: '#1C2127',
		},
	},
	crosshair: {
		mode: CrosshairMode.Normal,
	},
};

const API_URL =
	'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000';

const ChartAndOrderBook = () => {
	const priceChart = useRef<HTMLDivElement>(null);
	const volumeChart = useRef<HTMLDivElement>(null);

	const [orderBook, setOrderBook] = useState<OrderBOOK>({
		bids: [],
		asks: [],
	});

	const [loading, setLoading] = useState(true);

	useSingleEffect(() => {
		// Fetch order book data
		const fetchOrderBook = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					'https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=5'
				);
				const data = await response.json();

				setOrderBook({
					bids: formatOrders(data.bids),
					asks: formatOrders(data.asks),
				});
			} catch (error) {
				console.error('Error retrieving order book:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchOrderBook();

		const stream = new WebSocket(
			'wss://stream.binance.com:9443/ws/btcusdt@depth'
		);

		stream.onmessage = (event) => {
			const data = JSON.parse(event.data);

			setOrderBook({
				asks: formatOrders(data.a.slice(0, 5)),
				bids: formatOrders(data.b.slice(0, 5)),
			});
		};
	}, []);

	useSingleEffect(() => {
		const setCanvas = () => {
			if (priceChart.current && volumeChart.current) {
				const chart = createChart(priceChart.current, chartOptions);

				const volumeSeriesChart = createChart(volumeChart.current, {
					...chartOptions,
					height: 150,
				});

				const candleSeries = chart.addCandlestickSeries({
					upColor: '#00C076',
					downColor: '#FF6838',
					borderDownColor: '#FF6838',
					borderUpColor: '#00C076',
					wickDownColor: '#FF6838',
					wickUpColor: '#00C076',
				});

				const volumeSeries = volumeSeriesChart.addHistogramSeries();

				/** fetch initial data/history */
				fetch(API_URL)
					.then((res) => res.json())
					.then((data: Array<Array<string>>) => {
						const cdata = data.map((d) => ({
							time: (Number(d[0]) / 1000) as Time,
							open: parseFloat(d[1]),
							high: parseFloat(d[2]),
							low: parseFloat(d[3]),
							close: parseFloat(d[4]),
						}));

						/** update candle series with initial history */
						candleSeries.setData(cdata);

						const volumes = data.map((d) => {
							const value = parseFloat(d[5]);

							return {
								time: (Number(d[0]) / 1000) as Time,
								value,
								color:
									parseFloat(d[4]) >= parseFloat(d[1])
										? '#00C076'
										: '#FF6838',
							};
						});

						/** update volume series with initial history */
						volumeSeries.setData(volumes);
					})
					.catch((err) => console.error(err));

				/** create a websocket to get live updates */
				const bnSocket = new WebSocket(
					'wss://stream.binance.com:9443/ws/btcusdt@kline_1m'
				);

				bnSocket.onmessage = function (event) {
					const res = JSON.parse(event.data);
					const time = (res.k.t / 1000) as Time;
					const open = parseFloat(res.k.o);
					const high = parseFloat(res.k.h);
					const low = parseFloat(res.k.l);
					const close = parseFloat(res.k.c);

					/** update the candlestick based on updates  */
					candleSeries.update({ time, open, high, low, close });
				};
			}
		};

		console.log('...hello world');

		setCanvas();
	}, []);

	return (
		<div className="chart-order">
			<div className="chart_wrapper">
				<ChartTopBar />
				<PriceChart ref={priceChart} />
				<VolumeChart ref={volumeChart} />
			</div>
			<OrderBook loading={loading} orderBook={orderBook} />
		</div>
	);
};

export default ChartAndOrderBook;
