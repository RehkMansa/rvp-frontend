import { MdInfoOutline } from 'react-icons/md';
import './index.css';
import clsx from 'clsx';

type Props = {
	label: string;
	children: React.ReactNode;
	className?: string;
};

const InputLabelWrapper = (props: Props) => {
	const { label, children, className } = props;

	return (
		<label className={clsx('label_wrapper', className)}>
			<span className="label_wrapper__hint">
				{label}
				<MdInfoOutline
					size={13.5}
					className="label_wrapper__label__icon"
					width={13.5}
				/>
			</span>
			{children}
		</label>
	);
};

export default InputLabelWrapper;
