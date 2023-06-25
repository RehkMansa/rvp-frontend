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
	className?: string;
	onClick?(name: string): void;
	selected?: string;
};

/** memorizing it so it doesnt update unless props change */
const TabPanelHeader = memo(
	({ items, className, onClick, selected }: Props) => (
		<div className={clsx('tab_panel text-gray', className)}>
			{items.map(({ name, className, isActive }) => (
				<button
					key={name}
					type="button"
					onClick={() => onClick?.(name)}
					className={clsx(
						(isActive || selected === name) && 'tab_panel--active',
						className
					)}
				>
					{name}
				</button>
			))}
		</div>
	)
);

export default TabPanelHeader;
