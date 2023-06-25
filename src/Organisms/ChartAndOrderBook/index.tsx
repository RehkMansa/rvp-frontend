import { Fragment, useState } from 'react';
import useSingleEffect from '@/hooks/useSingleEffect';
import { OrderBOOK, formatOrders } from '@/consts';
import OrderBook from '@/Molecules/OrderBook';
import './index.css';
import Chart from '@/Molecules/Chart';
import clsx from 'clsx';

const tabHeaders = ['Charts', 'Orderbook', 'Recent trades'] as const;

type Selected = (typeof tabHeaders)[number];

const ChartAndOrderBook = () => {
	const [selected, setSelected] = useState<Selected>(tabHeaders[0]);

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

	const applyShowClass = (componentName: Selected) => {
		if (selected === componentName) return 'chart-tab-content--visible';

		return undefined;
	};

	return (
		<Fragment>
			{/** this shows up for only lg screen upwards ::>900px  */}
			<div className="chart-order hide-lg">
				<Chart />
				<OrderBook loading={loading} orderBook={orderBook} />
			</div>
			<div className="chart-order show-lg">
				<div className="chart--wrapper--sm">
					<div className="tab_panel chart-sm-a-tabs">
						{tabHeaders.map((n) => (
							<button
								type="button"
								onClick={() => setSelected(n)}
								key={n}
								className={clsx(
									n === selected && 'tab_panel--active '
								)}
							>
								{n}
							</button>
						))}
					</div>
					<div className={clsx('chart-tab-content')}>
						<div className={applyShowClass('Charts')}>
							<Chart />
						</div>
						<div className={applyShowClass('Orderbook')}>
							<OrderBook
								loading={loading}
								orderBook={orderBook}
							/>
						</div>
						<div className={applyShowClass('Recent trades')}></div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ChartAndOrderBook;
