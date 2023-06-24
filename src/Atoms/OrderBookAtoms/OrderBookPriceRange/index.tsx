import clsx from 'clsx';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';

type Props = {
	topBid: string | number;
	topAsk: string | number;
};

const OrderBookPriceRange = ({ topAsk, topBid }: Props) => {
	const formattedTopBid = Number(topBid);
	const formattedTopAsk = Number(topAsk);

	return (
		<div
			className={clsx(
				'orderbook__price_range',
				formattedTopBid >= formattedTopAsk
					? 'text-green'
					: 'text-danger'
			)}
		>
			<p>{formattedTopBid.toFixed(2)}</p>
			{formattedTopBid >= formattedTopAsk ? (
				<BsArrowUpShort size={20} />
			) : (
				<BsArrowDownShort size={20} />
			)}
			<p className="text-white">{formattedTopAsk.toFixed()}</p>
		</div>
	);
};

export default OrderBookPriceRange;
