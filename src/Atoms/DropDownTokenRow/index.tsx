import './index.css';

type Props = {
	name: string;
	img: string;
	price: string;
	percentage: string;
};

const DropDownTokenRow = ({ name, img, percentage, price }: Props) => (
	<div className="dropdown__row">
		<div className="dropdown__row__right">
			<img src={img} alt={name} />
			<p>{name}</p>
		</div>
		<div className="dropdown__row__left">
			<p>{price}</p>
			<p className="text-green">{percentage}</p>
		</div>
	</div>
);

export default DropDownTokenRow;
