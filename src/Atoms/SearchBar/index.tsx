import './index.css';
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = () => (
	<div className="search_bar">
		<span className="search_bar__icon">
			<BiSearchAlt size={18} />
		</span>
		<input placeholder="Search" />
	</div>
);

export default SearchBar;
