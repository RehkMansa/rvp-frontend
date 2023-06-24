import { useRef, useState } from 'react';
import { CrosshairMode, Time, createChart } from 'lightweight-charts';
import useSingleEffect from '@/hooks/useSingleEffect';
import { LuChevronDown } from 'react-icons/lu';
import { GrRedo, GrUndo } from 'react-icons/gr';
import './index.css';
import CandleSvg from '@/assets/CandleChart1.svg';

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

const intervals = ['1h', '2h', '4h', '1d', '1w', '1m'];

const API_URL =
	'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000';

const Chart = () => {
	const priceChart = useRef<HTMLDivElement>(null);
	const volumeChart = useRef<HTMLDivElement>(null);

	const [activeTime, setActiveTime] = useState(4);

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

						//

						const volumes = data.map((d) => {
							const value = parseFloat(d[5]);

							return {
								time: (Number(d[0]) / 1000) as Time,
								value,
								color:
									parseFloat(d[4]) >= parseFloat(d[1])
										? '#00C076'
										: '#FF6838', // Set the color based on open and close values
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

		setCanvas();
	}, []);

	console.log('....');

	return (
		<div className="chart_wrapper">
			<div className="chart_wrapper__time">
				<span>Time</span>
				{intervals.map((time, idx) => (
					<button
						className={`chart_wrapper__time--interval ${
							idx === activeTime
								? 'chart_wrapper__time--interval-active'
								: ''
						}`}
						type="submit"
						onClick={() => setActiveTime(idx)}
						key={time}
					>
						{time}
					</button>
				))}
				<div style={{ marginTop: 3 }}>
					<LuChevronDown />
				</div>
				<div className="chart_wrapper__time--interval border-sides">
					<img src={CandleSvg} alt="" />
				</div>
				<div className="chart_wrapper--fx">Fx Indicators</div>
				<div className="chart_wrapper__arrows">
					<GrUndo size={19} />
					<GrRedo size={19} />
				</div>
			</div>
			<div
				ref={priceChart}
				className="chart_container chart_container-chart1"
			/>
			<div
				ref={volumeChart}
				className="chart_container chart_container-chart2"
			/>
		</div>
	);
};

export default Chart;
