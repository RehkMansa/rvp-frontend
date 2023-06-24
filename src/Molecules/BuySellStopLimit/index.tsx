import PriceOnlyInput from '@/Atoms/PriceOnlyInput';
import LimitFormTypeDropDown from '@/Atoms/BuySellAtoms/TypeDropDown';
import CheckBoxWithHint from '@/Atoms/BuySellAtoms/CheckBoxWithHint';
import BuySellFormFooter from '@/Atoms/BuySellAtoms/BuySellFormFooter';
import './index.css';

const options = [
	{
		label: 'Trigger Price',
		className: 'buy--trigger',
	},
	{
		label: 'Limit price',
	},
	{
		label: 'Amount',
	},
];

const BuySellStopLimit = () => {
	return (
		<div className="limit-form">
			{options.map(({ label, className }) => (
				<PriceOnlyInput
					key={label}
					wrapperClass={className}
					label={label}
				/>
			))}

			<LimitFormTypeDropDown />
			<CheckBoxWithHint label="Post Only" />
			<BuySellFormFooter />
		</div>
	);
};

export default BuySellStopLimit;
