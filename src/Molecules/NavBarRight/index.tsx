import HeaderAvatar from '@/Atoms/HeaderAvatar';
import { HiOutlineLogout } from 'react-icons/hi';
import { TfiWorld } from 'react-icons/tfi';
import './index.css';

const NavBarRight = () => (
	<div className="header__right">
		<HeaderAvatar name="Olakunle Te..." />
		<TfiWorld size={24} />
		<HiOutlineLogout className="flipX header__right--logout" size={22} />
	</div>
);

export default NavBarRight;
