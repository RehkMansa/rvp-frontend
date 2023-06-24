import TabPanelHeader from '@/Atoms/TabPanelHeader';
import './index.css';
import BuySellTabElement from '@/Molecules/BuySellTabElement';

const BuySellTab = () => {
	return (
		<div className="buysell">
			<TabPanelHeader
				items={[
					{
						name: 'Buy',
						isActive: true,
						className: 'border-success',
					},
					{ name: 'Sell' },
				]}
			/>

			<BuySellTabElement />
		</div>
	);
};

export default BuySellTab;
