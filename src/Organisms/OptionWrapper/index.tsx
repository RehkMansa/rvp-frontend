import TabPanelHeader from '@/Atoms/TabPanelHeader';
import './index.css';
import { useState } from 'react';

const items = [
	{ name: 'Open Orders' },
	{ name: 'Positions' },
	{ name: 'Order History' },
	{ name: 'Trade History' },
];

const OptionWrapper = () => {
	const [selected, setSelected] = useState(items[0].name);

	return (
		<div className="options-wrapper">
			<div className="options-wrapper--container">
				<TabPanelHeader
					items={items}
					className="options-wrapper--tab"
					selected={selected}
					onClick={setSelected}
				/>
				<div className="options-wrapper--content">
					<div>
						<h4>No {selected}</h4>
						<p className="text-gray">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Id pulvinar nullam sit imperdiet pulvinar.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OptionWrapper;
