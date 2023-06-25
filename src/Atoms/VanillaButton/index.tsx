import clsx from 'clsx';
import { ComponentProps } from 'react';
import './index.css';

type Props = ComponentProps<'button'> & {
	variant?: 'green' | 'red';
};

const VanillaButton = (props: Props) => {
	const { className, variant = 'green', type } = props;

	return (
		<button
			type={type ?? 'button'}
			{...props}
			className={clsx('vanilla-btn', `btn-${variant}`, className)}
		/>
	);
};

export default VanillaButton;
