import Icon1 from '@/assets/hamburger-stacked.svg';
import Icon2 from '@/assets/hamburger--2.svg';
import Icon3 from '@/assets/hamburger--3.svg';
import { FaChevronDown } from 'react-icons/fa';
import * as DropDown from '@radix-ui/react-dropdown-menu';

type Props = {
	activeFilter: number;
	onClick: (idx: number) => void;
};

const OrderBookTopBar = ({ activeFilter, onClick }: Props) => (
	<div className="orderbook__icons">
		<img className="orderbook__icons--active" src={Icon1} alt="" />
		<img src={Icon2} alt="" />
		<img src={Icon3} alt="" />
		<div className="orderbook__dropdown">
			<DropDown.Root>
				<DropDown.Trigger asChild>
					<div className="orderbook__dropdown__trigger">
						{activeFilter}
						<FaChevronDown size={12} style={{ marginTop: 3 }} />
					</div>
				</DropDown.Trigger>

				<DropDown.Portal>
					<DropDown.Content className="orderbook__dropdown__content">
						{[5, 10, 20, 30].map((n) => (
							<DropDown.Item
								onClick={() => onClick(n)}
								key={n}
								className="orderbook__dropdown__item"
							>
								<span>{n}</span>
							</DropDown.Item>
						))}
					</DropDown.Content>
				</DropDown.Portal>
			</DropDown.Root>
		</div>
	</div>
);

export default OrderBookTopBar;
