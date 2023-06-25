import { memo } from 'react';

const OrderBookHeader = memo(() => (
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
));

export default OrderBookHeader;
