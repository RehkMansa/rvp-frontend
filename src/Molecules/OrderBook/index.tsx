import React, { useEffect, useState } from 'react';
import './index.css';
import OrderBookHeader from '@/Atoms/OrderBookAtoms/OrderBookHeader';
import TabPanelHeader from '@/Atoms/TabPanelHeader';
import OrderBookTopBar from '@/Atoms/OrderBookAtoms/OrderBookTopBar';
import OrderBookRow from '@/Atoms/OrderBookAtoms/OrderBookRow';
import OrderBookPriceRange from '@/Atoms/OrderBookAtoms/OrderBookPriceRange';

interface Order {
	price: number;
	amount: number;
	total: number;
}

const OrderBook: React.FC = () => {
	const [orderBook, setOrderBook] = useState<{
		bids: Order[];
		asks: Order[];
	}>({
		bids: [],
		asks: [],
	});

	const [loading, setLoading] = useState(true);

	const [activeFilter, setActiveFilter] = useState(10);

	const formatOrders = (orders: number[][]): Order[] => {
		return orders.map(([price, amount]) => {
			const total = price * amount;
			return { price, amount, total };
		});
	};

	useEffect(() => {
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

		/* 	const stream = new WebSocket(
			'wss://stream.binance.com:9443/ws/btcusdt@depth'
		); 
		
		stream.onmessage = (event) => {
			const data = JSON.parse(event.data);

			setOrderBook({
				asks: formatOrders(data.a.slice(0, 5)),
				bids: formatOrders(data.b.slice(0, 5)),
			});
		}; */
	}, []);

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
