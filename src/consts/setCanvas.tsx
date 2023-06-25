import { Time, createChart } from 'lightweight-charts';
import { CANDLE_API_URL, chartOptions } from '.';

type Ref = React.RefObject<HTMLDivElement>;

const setCanvas = (ref1: Ref, ref2: Ref) => {
	if (ref1.current && ref2.current) {
		const chart = createChart(ref1.current, chartOptions);

		const volumeSeriesChart = createChart(ref2.current, {
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
		fetch(CANDLE_API_URL)
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
	} else {
		console.log('error: ', ref1, ref2);
	}
};

export default setCanvas;
