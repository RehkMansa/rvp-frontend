import { Fragment } from 'react';
import NavBar from '../../Organisms/Navbar';
import TopInfo from '@/Organisms/TopInfo';
import ChartAndOrderBook from '@/Organisms/ChartAndOrderBook';
import BuySellTab from '@/Organisms/BuySellTab';
import './index.css';

const HomePage = () => (
	<Fragment>
		<NavBar />
		<TopInfo />
		<div className="chart__wrapper">
			<ChartAndOrderBook />
			<BuySellTab />
		</div>
	</Fragment>
);

export default HomePage;
