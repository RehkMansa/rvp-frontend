import PriceOnlyInput from '@/Atoms/PriceOnlyInput';
import './index.css';
import LimitFormTypeDropDown from '../TypeDropDown';

const options = [
	{
		label: 'Limit price',
	},
	{
		label: 'Amount',
	},
];

const LimitForm = () => {
	return (
		<div className="limit-form">
			{options.map(({ label }) => (
				<PriceOnlyInput key={label} label={label} />
			))}

			<LimitFormTypeDropDown />
		</div>
	);
};

export default LimitForm;
