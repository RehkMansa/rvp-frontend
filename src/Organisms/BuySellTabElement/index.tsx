import LimitForm from '@/Molecules/LimitForm';
import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import BuySellMainFooter from '@/Molecules/BuySellMainFooter';
import BuySellMarketForm from '@/Molecules/BuySellMarketForm';
import BuySellStopLimit from '@/Molecules/BuySellStopLimit';

const tabs = [
	{ name: 'Limit', component: LimitForm },
	{ name: 'Market', component: BuySellMarketForm },
	{ name: 'Stop-Limit', component: BuySellStopLimit },
];

const BuySellTabElement = () => {
	const [activeTab, setActiveTab] = useState(tabs[0].name);

	return (
		<div className="buysell__tab">
			<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
				<Tabs.List className="buysell__tab__list">
					{tabs.map((ele) => (
						<Tabs.Trigger
							className="buysell__tab__list--trigger"
							key={ele.name}
							value={ele.name}
						>
							{ele.name}
						</Tabs.Trigger>
					))}
				</Tabs.List>
				{tabs.map((ele) => (
					<Tabs.Content
						className="buysell__tab__list--content"
						key={ele.name}
						value={ele.name}
					>
						<ele.component />
					</Tabs.Content>
				))}
				<BuySellMainFooter />
			</Tabs.Root>
		</div>
	);
};

export default BuySellTabElement;
