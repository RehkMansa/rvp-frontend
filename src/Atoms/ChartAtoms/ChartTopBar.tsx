import { memo, useState } from 'react';
import { GrRedo, GrUndo } from 'react-icons/gr';
import { LuChevronDown } from 'react-icons/lu';
import CandleSvg from '@/assets/CandleChart1.svg';

const intervals = ['1h', '2h', '4h', '1d', '1w', '1m'];

const ChartTopBar = memo(() => {
	const [activeTime, setActiveTime] = useState(4);

	return (
		<div className="chart_wrapper__time">
			<span>Time</span>
			{intervals.map((time, idx) => (
				<button
					className={`chart_wrapper__time--interval ${
						idx === activeTime
							? 'chart_wrapper__time--interval-active'
							: ''
					}`}
					type="button"
					onClick={() => setActiveTime(idx)}
					key={time}
				>
					{time}
				</button>
			))}
			<div style={{ marginTop: 3 }}>
				<LuChevronDown />
			</div>
			<div className="chart_wrapper__time--interval border-sides">
				<img src={CandleSvg} alt="" />
			</div>
			<div className="chart_wrapper--fx">Fx Indicators</div>
			<div className="chart_wrapper__arrows">
				<GrUndo size={19} />
				<GrRedo size={19} />
			</div>
		</div>
	);
});

export default ChartTopBar;
