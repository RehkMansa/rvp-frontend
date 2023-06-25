import React from 'react';

const PriceChart = React.forwardRef<HTMLDivElement>((_, ref) => {
	return <div ref={ref} className="chart_container chart_container-chart1" />;
});

export default PriceChart;
