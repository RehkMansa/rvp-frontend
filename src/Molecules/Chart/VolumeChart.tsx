import React from 'react';

/** Separating each chart to their separate elements */
const VolumeChart = React.forwardRef<HTMLDivElement>((_, ref) => {
	return <div ref={ref} className="chart_container chart_container-chart2" />;
});

VolumeChart.displayName = 'VolumeChart';

export default VolumeChart;
