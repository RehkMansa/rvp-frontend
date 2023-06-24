import LimitForm from '@/Molecules/LimitForm';
import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import BuySellMainFooter from '@/Molecules/BuySellMainFooter';

const tabs = ['Limit', 'Market', 'Stop-Limit'];

const BuySellTabElement = () => {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	return (
		<div className="buysell__tab">
			<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
				<Tabs.List className="buysell__tab__list">
					{tabs.map((ele) => (
						<Tabs.Trigger
							className="buysell__tab__list--trigger"
							key={ele}
							value={ele}
						>
							{ele}
						</Tabs.Trigger>
					))}
				</Tabs.List>
				{tabs.map((ele) => (
					<Tabs.Content
						className="buysell__tab__list--content"
						key={ele}
						value={ele}
					>
						<LimitForm />
					</Tabs.Content>
				))}
				<BuySellMainFooter />
			</Tabs.Root>
		</div>
	);
};

export default BuySellTabElement;
