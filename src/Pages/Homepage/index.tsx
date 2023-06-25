import { Fragment } from 'react';
import TopInfo from '@/Organisms/TopInfo';
import ChartAndOrderBook from '@/Organisms/ChartAndOrderBook';
import BuySellTab from '@/Organisms/BuySellTab';
import OptionWrapper from '@/Organisms/OptionWrapper';
import './index.css';
import BuySellPopUp from '@/Organisms/BuySellPopUp';

const HomePage = () => (
	<Fragment>
		<TopInfo />
		<div className="chart-container">
			<div className="chat-container--wrapped">
				<ChartAndOrderBook />
				<OptionWrapper />
			</div>
			<BuySellTab className="chart-container__buysell" />
		</div>
		<BuySellPopUp />
	</Fragment>
);

export default HomePage;
