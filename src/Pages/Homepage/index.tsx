import { Fragment } from 'react';
import NavBar from '../../Organisms/Navbar';
import TopInfo from '@/Organisms/TopInfo';
import ChartAndOrderBook from '@/Organisms/ChartAndOrderBook';

const HomePage = () => (
	<Fragment>
		<NavBar />
		<TopInfo />
		<ChartAndOrderBook />
	</Fragment>
);

export default HomePage;
