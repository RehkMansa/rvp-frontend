import HeaderAvatar from '@/Atoms/HeaderAvatar';
import { HiOutlineLogout } from 'react-icons/hi';
import { TfiWorld } from 'react-icons/tfi';

const NavBarRight = () => (
	<div className="header__right">
		<HeaderAvatar name="Olakunle Te..." />
		<TfiWorld size={20} />
		<HiOutlineLogout className="flipX" size={22} />
	</div>
);

export default NavBarRight;
