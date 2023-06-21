import TokenName from '@/Atoms/TokenName';
import TokenInfo from '@/assets/tokeninfo.png';
import './index.css';

const TopInfo = () => (
	<div className="topinfo">
		<TokenName name="BTC/USDT" icon={TokenInfo} />
	</div>
);

export default TopInfo;
