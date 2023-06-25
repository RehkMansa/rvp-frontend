import { Fragment } from 'react';
import TopInfo from '@/Organisms/TopInfo';
import ChartAndOrderBook from '@/Organisms/ChartAndOrderBook';
import BuySellTab from '@/Organisms/BuySellTab';
import './index.css';

const HomePage = () => (
	<Fragment>
		<TopInfo />
		<div className="chart__wrapper">
			<ChartAndOrderBook />
			<BuySellTab className="chart__wrapper__buysell" />
		</div>
	</Fragment>
);

export default HomePage;
