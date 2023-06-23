import { Fragment } from 'react';
import NavBar from '../../Organisms/Navbar';
import TopInfo from '@/Organisms/TopInfo';
import Chart from '@/Molecules/Chart';

const HomePage = () => (
	<Fragment>
		<NavBar />
		<TopInfo />
		<Chart />
	</Fragment>
);

export default HomePage;
