type Props = {
	price: number | string;
	amount: number | string;
	total: number | string;
	isBid: boolean;
};

const determineWidth = (price: unknown, amount: unknown) => {
	const tt = (Number(price) * Number(amount)) / 250;

	return tt >= 200
		? tt / 3
		: tt < 50
		? tt * 10 >= 250
			? tt * 5
			: tt * 10
		: tt;
};

const OrderBookRow = (props: Props) => {
	const { price, amount, total, isBid } = props;

	return (
		<div className="orderbook__item">
			<div
				style={{
					maxWidth: determineWidth(price, amount),
					backgroundColor: isBid ? '#25C26E' : '#FF6838',
				}}
				className="orderbook__item-visiualizer"
			/>
			<p className="text-left text-danger">{Number(price).toFixed(2)}</p>
			<p>{Number(amount).toFixed(4)}</p>
			<p className="text-right">{Number(total).toFixed(1)}</p>
		</div>
	);
};

export default OrderBookRow;
