import { ComponentProps } from 'react';
import './index.css';
import InputLabelWrapper from '../InputLabelWrapper';

type Props = {
	label: string;
	currency?: string;
	placeholder?: string;
	wrapperClass?: string;
} & ComponentProps<'input'>;

const PriceOnlyInput = (props: Props) => {
	const { label, placeholder, currency, wrapperClass } = props;

	return (
		<InputLabelWrapper className={wrapperClass} label={label}>
			<input
				type="number"
				step={0.01}
				{...props}
				placeholder={placeholder ?? '0.00'}
				className="rvd_input"
			/>
			<span>{currency ?? 'USD'}</span>
		</InputLabelWrapper>
	);
};

export default PriceOnlyInput;
