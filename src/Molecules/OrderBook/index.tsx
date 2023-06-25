import { useState } from 'react';
import './index.css';
import OrderBookHeader from '@/Atoms/OrderBookAtoms/OrderBookHeader';
import TabPanelHeader from '@/Atoms/TabPanelHeader';
import OrderBookTopBar from '@/Atoms/OrderBookAtoms/OrderBookTopBar';
import OrderBookRow from '@/Atoms/OrderBookAtoms/OrderBookRow';
import OrderBookPriceRange from '@/Atoms/OrderBookAtoms/OrderBookPriceRange';
import { OrderBOOK } from '@/consts';

type Props = {
	orderBook: OrderBOOK;
	loading: boolean;
};

const OrderBook = (props: Props) => {
	const { orderBook, loading } = props;

	const [activeFilter, setActiveFilter] = useState(10);

	if (loading) return <div className="orderbook" />;

	const { bids, asks } = orderBook;

	const topBid = Number(bids[bids.length - 1].price);

	const topAsk = Number(asks[asks.length - 1].price);

	return (
		<div className="orderbook">
			<TabPanelHeader
				items={[
					{ name: 'Order Book', isActive: true },
					{ name: 'Recent Trades' },
				]}
			/>
			<OrderBookTopBar
				activeFilter={activeFilter}
				onClick={setActiveFilter}
			/>
			<OrderBookHeader />
			<div>
				{asks.map((ask, idx) => (
					<OrderBookRow key={idx} {...ask} isBid={false} />
				))}
			</div>
			<OrderBookPriceRange topAsk={topAsk} topBid={topBid} />
			<div>
				{bids.map((bid, idx) => (
					<OrderBookRow key={idx} {...bid} isBid />
				))}
			</div>
		</div>
	);
};

export default OrderBook;
