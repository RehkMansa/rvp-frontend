import Chart from '@/Molecules/Chart';
import OrderBook from '@/Molecules/OrderBook';
import './index.css';

const ChartAndOrderBook = () => (
	<div className="chart-order">
		<Chart />
		<OrderBook />
	</div>
);

export default ChartAndOrderBook;
