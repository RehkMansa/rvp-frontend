import { ComponentProps } from 'react';
import './index.css';
import InputLabelWrapper from '../InputLabelWrapper';

type Props = {
	label: string;
	currency: string;
	placeholder?: string;
} & ComponentProps<'input'>;

const PriceOnlyInput = (props: Props) => {
	const { label, placeholder, currency } = props;

	return (
		<InputLabelWrapper label={label}>
			<input
				type="number"
				step={0.01}
				{...props}
				placeholder={placeholder ?? '0.00'}
				className="rvd_input"
			/>
			<span>{currency}</span>
		</InputLabelWrapper>
	);
};

export default PriceOnlyInput;
