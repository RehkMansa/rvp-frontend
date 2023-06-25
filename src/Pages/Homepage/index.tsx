import { Fragment } from 'react';
import TopInfo from '@/Organisms/TopInfo';
import ChartAndOrderBook from '@/Organisms/ChartAndOrderBook';
import BuySellTab from '@/Organisms/BuySellTab';
import './index.css';

const HomePage = () => (
	<Fragment>
		<TopInfo />
		<div className="chart-container">
			<div className="chat-container--wrapped">
				<ChartAndOrderBook />
				<p>hello world</p>
			</div>
			<BuySellTab className="chart-container__buysell" />
		</div>
	</Fragment>
);

export default HomePage;
