import ProfileImg from '@/assets/profile.png';
import './index.css';
import { FiChevronRight } from 'react-icons/fi';

type Props = {
	name: string;
};

const HeaderAvatar = ({ name }: Props) => (
	<div className="header-avatar">
		<img src={ProfileImg} alt="profile" />
		<h5>{name}</h5>
		<FiChevronRight size={20} />
	</div>
);

export default HeaderAvatar;
