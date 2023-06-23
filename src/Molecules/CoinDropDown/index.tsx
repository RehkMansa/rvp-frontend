import TokenName from '@/Atoms/TokenName';
import TokenInfo from '@/assets/tokeninfo.png';
import { FaChevronDown } from 'react-icons/fa';
import * as DropDown from '@radix-ui/react-dropdown-menu';
import SearchBar from '@/Atoms/SearchBar';
import DropDownTokenRow from '@/Atoms/DropDownTokenRow';
import DropDownImage from '@/assets/dropdownlogo.png';
import './index.css';

const CoinDropDown = () => (
	<div className="topinfo__coin_dropdown">
		<DropDown.Root>
			<DropDown.Trigger asChild>
				<div className="topinfo__coin_dropdown__trigger">
					<button className="topinfo__token" type="button">
						<TokenName name="BTC/USDT" icon={TokenInfo} />
						<FaChevronDown size={16} />
					</button>
					<span className="text-green-alt ">$20,634</span>
				</div>
			</DropDown.Trigger>

			<DropDown.Portal>
				<DropDown.Content
					sideOffset={20}
					className="topinfo__coin_dropdown__modal"
				>
					<SearchBar />

					<div className="topinfo__coin_dropdown__modal__filter">
						{['All', 'USD', 'BTC'].map((dd, idx) => (
							<span
								key={dd}
								className={idx === 0 ? 'active' : undefined}
							>
								{dd}
							</span>
						))}
					</div>
					<DropDown.Item>
						{Array.from({ length: 50 }).map((_n, idx) => (
							<DropDownTokenRow
								key={idx}
								name="BTC-USDT"
								price="$23,234.6"
								percentage="+0.005%"
								img={DropDownImage}
							/>
						))}
					</DropDown.Item>
				</DropDown.Content>
			</DropDown.Portal>
		</DropDown.Root>
	</div>
);

export default CoinDropDown;
