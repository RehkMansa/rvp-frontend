import { MdInfoOutline } from 'react-icons/md';
import './index.css';

type Props = {
	label: string;
	children: React.ReactNode;
};

const InputLabelWrapper = (props: Props) => {
	const { label, children } = props;

	return (
		<label className="label_wrapper">
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
