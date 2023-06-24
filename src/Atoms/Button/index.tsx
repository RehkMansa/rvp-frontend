import clsx from 'clsx';
import { ComponentProps } from 'react';
import './index.css';

type Props = {
	variant?: 'gradient' | 'regular';
} & ComponentProps<'button'>;

const Button = (props: Props) => {
	const { variant, className } = props;

	return (
		<button
			{...props}
			className={clsx(
				variant === 'gradient' && variant,
				'button',
				className
			)}
			type="button"
		/>
	);
};

export default Button;
