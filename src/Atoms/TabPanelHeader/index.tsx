import clsx from 'clsx';
import './index.css';

type Items = {
	name: string;
	isActive?: boolean;
	className?: string;
};

type Props = {
	items: Items[];
};

const TabPanelHeader = ({ items }: Props) => (
	<div className="tab_panel text-gray">
		{items.map(({ name, className, isActive }) => (
			<div
				key={name}
				className={clsx(isActive && 'tab_panel--active', className)}
			>
				{name}
			</div>
		))}
	</div>
);

export default TabPanelHeader;
