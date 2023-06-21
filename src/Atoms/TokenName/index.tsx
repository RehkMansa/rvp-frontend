import './index.css';

type Props = {
	name: string;
	icon: string;
};

const TokenName = ({ name, icon }: Props) => (
	<div className="topinfo__token-details">
		<img src={icon} alt={name} />
		<h5>{name}</h5>
	</div>
);

export default TokenName;
