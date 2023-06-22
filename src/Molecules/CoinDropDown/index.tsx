import TokenName from '@/Atoms/TokenName';
import TokenInfo from '@/assets/tokeninfo.png';
import './index.css';
import { FaChevronDown } from 'react-icons/fa';
import * as DropDown from '@radix-ui/react-dropdown-menu';
import SearchBar from '@/Atoms/SearchBar';

const CoinDropDown = () => (
	<div className="topinfo__coin_dropdown">
		<DropDown.Root>
			<DropDown.Trigger asChild>
				<button className="topinfo__token" type="button">
					<TokenName name="BTC/USDT" icon={TokenInfo} />
					<FaChevronDown size={16} />
				</button>
			</DropDown.Trigger>

			<DropDown.Portal>
				<DropDown.Content
					sideOffset={20}
					className="topinfo__coin_dropdown__modal"
				>
					<SearchBar />
				</DropDown.Content>
			</DropDown.Portal>
		</DropDown.Root>
	</div>
);

export default CoinDropDown;
