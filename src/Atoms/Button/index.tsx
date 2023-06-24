import clsx from 'clsx';
import { ComponentProps } from 'react';
import './index.css';

type Props = {
	variant?: 'gradient' | 'regular';
} & ComponentProps<'button'>;

const Button = (props: Props) => {
	const { variant } = props;

	return (
		<button
			{...props}
			className={clsx(variant === 'gradient' && variant, 'button')}
			type="button"
		/>
	);
};

export default Button;
