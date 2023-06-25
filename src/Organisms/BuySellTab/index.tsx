import TabPanelHeader from '@/Atoms/TabPanelHeader';
import BuySellTabElement from '../BuySellTabElement';
import './index.css';
import clsx from 'clsx';

type Props = {
	className?: string;
};

const BuySellTab = (props: Props) => {
	const { className } = props;

	return (
		<div className={clsx('buysell', className)}>
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
