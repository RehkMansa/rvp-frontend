import NavBarRight from '@/Molecules/NavBarRight';
import './index.css';
import MobileDropDown from '@/Atoms/MobileDropDown';
import { NAVLINKS } from '@/consts';

const NavBar = () => (
	<header className="header">
		<div className="header__logo">
			<img src="/logo.svg" alt="Fictional Company" />
		</div>

		<nav>
			<ul className="header__nav">
				{NAVLINKS.map(({ name, url }) => (
					<li
						key={name}
						className={url === '/' ? 'active' : undefined}
					>
						{name}
					</li>
				))}
			</ul>
		</nav>
		<NavBarRight />
		<MobileDropDown />
	</header>
);

export default NavBar;
