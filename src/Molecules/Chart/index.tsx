import ChartTopBar from '@/Atoms/ChartAtoms/ChartTopBar';
import setCanvas from '@/consts/setCanvas';
import useSingleEffect from '@/hooks/useSingleEffect';
import { useRef } from 'react';

const Chart = () => {
	const priceChart = useRef<HTMLDivElement>(null);
	const volumeChart = useRef<HTMLDivElement>(null);

	useSingleEffect(() => {
		setCanvas(priceChart, volumeChart);
	}, []);

	return (
		<div className="chart_wrapper">
			<ChartTopBar />
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
