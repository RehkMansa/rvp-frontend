import CoinDropDown from '@/Molecules/CoinDropDown';
import './index.css';
import {
	HiOutlineArrowSmDown,
	HiOutlineArrowSmUp,
	HiOutlineClock,
} from 'react-icons/hi';
import { AiOutlineBarChart } from 'react-icons/ai';

const options = [
	{
		title: '24h change',
		icon: HiOutlineClock,
		value: '520.80 +1.25%',
		isSuccess: true,
	},
	{
		title: '24h high',
		icon: HiOutlineArrowSmUp,
		value: '520.80 +1.25%',
	},
	{
		title: '24h low',
		icon: HiOutlineArrowSmDown,
		value: '520.80 +1.25%',
	},
	{
		title: '24h volume',
		icon: AiOutlineBarChart,
		value: '75.655.26',
	},
];

const TopInfo = () => (
	<div className="topinfo">
		<CoinDropDown />
		<div className="topinfo__content">
			{options.map(({ icon: Icon, title, value, isSuccess }) => (
				<div key={title} className="topinfo__content__card">
					<div className="topinfo__content__card__icon">
						<Icon />
						<span>{title}</span>
					</div>
					<p className={isSuccess ? 'text-green-alt' : undefined}>
						{value}
					</p>
				</div>
			))}
		</div>
	</div>
);

export default TopInfo;
