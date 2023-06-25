import { OrderBOOK, formatOrders } from '@/consts';
import useSingleEffect from '@/hooks/useSingleEffect';
import { useState } from 'react';
import OrderBook from '../OrderBook';

/** separating this so its not affected by updates */
const OrderBookWrapper = () => {
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

	return (
		<div>
			<OrderBook loading={loading} orderBook={orderBook} />
		</div>
	);
};

export default OrderBookWrapper;
