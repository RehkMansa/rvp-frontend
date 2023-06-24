import Button from '@/Atoms/Button';
import './index.css';

type Props = {
	value?: string;
};

const BuySellFormFooter = ({ value }: Props) => (
	<div className="buy_sell_form_footer">
		<div className="buy_sell_form_footer_row">
			<span>Total</span>
			<span>{value ?? '0.00'}</span>
		</div>
		<Button variant="gradient">Buy BTC</Button>
	</div>
);

export default BuySellFormFooter;
