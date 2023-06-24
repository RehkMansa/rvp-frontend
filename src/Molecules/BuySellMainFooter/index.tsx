import CurrencyDropDown from '@/Atoms/BuySellAtoms/CurrencyDropDown';
import './index.css';
import Button from '@/Atoms/Button';

type Props = {
	totalSum?: number;
	openOrders?: number;
	availableOrder?: number;
};

const BuySellMainFooter = (props: Props) => {
	const { totalSum, openOrders, availableOrder } = props;

	return (
		<div className="bsmf">
			<div className="bsmf__row">
				<div>
					<p>Total account value</p>
					<CurrencyDropDown />
				</div>
				<p className="text-white">{totalSum ?? '0.00'}</p>
			</div>
			<div className="bsmf__row">
				<div>
					<p>Open Orders</p>
					<p>Available</p>
				</div>
				<div>
					<p className="text-white">{availableOrder ?? '0.00'}</p>
					<p className="text-white">{openOrders ?? '0.00'}</p>
				</div>
			</div>
			<Button className="submit-button">Submit</Button>
		</div>
	);
};

export default BuySellMainFooter;
