import PriceOnlyInput from '@/Atoms/PriceOnlyInput';
import BuySellFormFooter from '@/Atoms/BuySellAtoms/BuySellFormFooter';

const options = [
	{
		label: 'Amount',
	},
];

const BuySellMarketForm = () => {
	return (
		<div className="limit-form">
			{options.map(({ label }) => (
				<PriceOnlyInput key={label} label={label} />
			))}

			<BuySellFormFooter />
		</div>
	);
};

export default BuySellMarketForm;
