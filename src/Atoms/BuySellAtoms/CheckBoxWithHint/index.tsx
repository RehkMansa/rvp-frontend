import { MdInfoOutline } from 'react-icons/md';
import './index.css';

type Props = {
	label: string;
};

const CheckBoxWithHint = (props: Props) => {
	const { label } = props;

	return (
		<div className="checkbox__withHint">
			<label className="checkbox__withHint__label">
				<input type="checkbox" />
				<span>{label}</span>
			</label>
			<MdInfoOutline size={13.5} className="label_wrapper__label__icon" />
		</div>
	);
};

export default CheckBoxWithHint;
