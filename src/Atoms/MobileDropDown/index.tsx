import HBMenu from '@/assets/hamburger.png';
import * as DropDown from '@radix-ui/react-dropdown-menu';
import './index.css';
import { NAVLINKS } from '@/consts';

const MobileDropDown = () => (
	<div className="mobile-dropdown">
		<DropDown.Root>
			<DropDown.Trigger className="mobile-dropdown__trigger" asChild>
				<div className="">
					<img src={HBMenu} alt="" />
				</div>
			</DropDown.Trigger>

			<DropDown.Portal>
				<DropDown.Content
					align="end"
					className="mobile-dropdown__content"
					sideOffset={10}
				>
					{NAVLINKS.map(({ name }) => (
						<DropDown.Item
							key={name}
							className="mobile-dropdown__item"
						>
							<span>{name}</span>
						</DropDown.Item>
					))}
					<DropDown.Item className="mobile-dropdown__item">
						<span>Logout</span>
					</DropDown.Item>
				</DropDown.Content>
			</DropDown.Portal>
		</DropDown.Root>
	</div>
);

export default MobileDropDown;
