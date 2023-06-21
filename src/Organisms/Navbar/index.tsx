import './index.css';
import NavBarRight from '@/Molecules/NavBarRight';

const links = [
	{
		name: 'exchange',
		url: '/',
	},
	{
		name: 'wallets',
		url: 'wallets',
	},
	{
		name: 'roqqu hub',
		url: 'roqqu hub',
	},
];

const NavBar = () => (
	<header className="header">
		<div className="header__logo">
			<img src="/logo.svg" alt="Fictional Company" />
		</div>

		<nav>
			<ul className="header__nav">
				{links.map(({ name, url }) => (
					<li className={url === '/' ? 'active' : undefined}>
						{name}
					</li>
				))}
			</ul>
		</nav>
		<NavBarRight />
	</header>
);

export default NavBar;
