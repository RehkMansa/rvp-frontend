import PriceOnlyInput from '@/Atoms/PriceOnlyInput';
import LimitFormTypeDropDown from '@/Atoms/BuySellAtoms/TypeDropDown';
import CheckBoxWithHint from '@/Atoms/BuySellAtoms/CheckBoxWithHint';
import BuySellFormFooter from '@/Atoms/BuySellAtoms/BuySellFormFooter';

const options = [
	{
		label: 'Trigger Price',
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
			{options.map(({ label }) => (
				<PriceOnlyInput key={label} label={label} />
			))}

			<LimitFormTypeDropDown />
			<CheckBoxWithHint label="Post Only" />
			<BuySellFormFooter />
		</div>
	);
};

export default BuySellStopLimit;
