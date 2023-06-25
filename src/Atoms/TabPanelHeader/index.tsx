import clsx from 'clsx';
import './index.css';
import { memo } from 'react';

type Items = {
	name: string;
	isActive?: boolean;
	className?: string;
};

type Props = {
	items: Items[];
};

/** memorizing it so it doesnt update unless props change */
const TabPanelHeader = memo(({ items }: Props) => (
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
));

export default TabPanelHeader;
