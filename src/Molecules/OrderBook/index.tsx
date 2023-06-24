import React, { useEffect, useState } from 'react';
import './index.css';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import Icon1 from '@/assets/hamburger-stacked.svg';
import Icon2 from '@/assets/hamburger--2.svg';
import Icon3 from '@/assets/hamburger--3.svg';
import * as DropDown from '@radix-ui/react-dropdown-menu';
import { FaChevronDown } from 'react-icons/fa';

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

	const determineWidth = (amount: number, volume: number): number => {
		const tt = (Number(amount) * Number(volume)) / 250;

		return tt >= 200
			? tt / 3
			: tt < 50
			? tt * 10 >= 250
				? tt * 5
				: tt * 10
			: tt;
	};

	const determineColor = (isBid: boolean): string => {
		return isBid ? '#25C26E' : '#FF6838';
	};

	const { bids, asks } = orderBook;

	const topBid = Number(bids[bids.length - 1].price);

	const topAsk = Number(asks[asks.length - 1].price);

	return (
		<div className="orderbook">
			<div className="orderbook__switch text-gray">
				<div className="orderbook__switch--active">Order Book</div>
				<div>Recent trades</div>
			</div>
			<div className="orderbook__icons">
				<img className="orderbook__icons--active" src={Icon1} alt="" />
				<img src={Icon2} alt="" />
				<img src={Icon3} alt="" />
				<div className="orderbook__dropdown">
					<DropDown.Root>
						<DropDown.Trigger asChild>
							<div className="orderbook__dropdown__trigger">
								{activeFilter}
								<FaChevronDown
									size={12}
									style={{ marginTop: 3 }}
								/>
							</div>
						</DropDown.Trigger>

						<DropDown.Portal>
							<DropDown.Content className="orderbook__dropdown__content">
								{[5, 10, 20, 30].map((n) => (
									<DropDown.Item
										onClick={() => setActiveFilter(n)}
										key={n}
										className="orderbook__dropdown__item"
									>
										<span>{n}</span>
									</DropDown.Item>
								))}
							</DropDown.Content>
						</DropDown.Portal>
					</DropDown.Root>
				</div>
			</div>
			<div className="orderbook__header">
				<p>
					Price
					<br />
					USDT
				</p>
				<p>
					Amount
					<br />
					(BTC)
				</p>
				<p className="text-right">Total</p>
			</div>
			<div>
				{asks.map((ask, index) => (
					<div key={index} className="orderbook__item">
						<div
							style={{
								maxWidth: determineWidth(ask.price, ask.amount),
								backgroundColor: determineColor(false),
							}}
							className="orderbook__item-visiualizer"
						/>
						<p className="text-left text-danger">
							{Number(ask.price).toFixed(2)}
						</p>
						<p>{Number(ask.amount).toFixed(4)}</p>
						<p className="text-right">
							{Number(ask.total).toFixed(1)}
						</p>
					</div>
				))}
			</div>
			<div
				className={`orderbook__item__active ${
					topBid >= topAsk ? 'text-green' : 'text-danger'
				}`}
			>
				<p>{topBid.toFixed(2)}</p>
				{topBid >= topAsk ? (
					<BsArrowUpShort size={20} />
				) : (
					<BsArrowDownShort size={20} />
				)}
				<p className="text-white">{topAsk.toFixed()}</p>
			</div>
			<div>
				{bids.map((bid, index) => (
					<div key={index} className="orderbook__item">
						<div
							style={{
								maxWidth: determineWidth(bid.price, bid.amount),
								backgroundColor: determineColor(true),
							}}
							className="orderbook__item-visiualizer"
						/>
						<p className="text-green">
							{Number(bid.price).toFixed(2)}
						</p>
						<p>{Number(bid.amount).toFixed(4)}</p>
						<p className="text-right">
							{Number(bid.total).toFixed(1)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default OrderBook;
