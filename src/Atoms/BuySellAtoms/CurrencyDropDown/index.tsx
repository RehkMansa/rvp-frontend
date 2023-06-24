import * as Select from '@radix-ui/react-select';
import { FaChevronDown } from 'react-icons/fa';
import NGN from '@/assets/nigerianflag.png';
import USD from '@/assets/usaflag.png';
import EUR from '@/assets/euroflag.png';
import GBP from '@/assets/britishflag.png';
import CheckIcon from '@/assets/checkicon.svg';
import './index.css';

const dropdownFields = [
	{ img: NGN, name: 'Nigerian Naira', symbol: 'NGN' },
	{ img: GBP, name: 'British Pounds', symbol: 'GBP' },
	{ img: USD, name: 'US Dollars', symbol: 'USD' },
	{ img: EUR, name: 'European euros', symbol: 'EUR' },
];

const CurrencyDropDown = () => {
	return (
		<Select.Root defaultValue={dropdownFields[1].symbol}>
			<Select.Trigger>
				<div className="limit-form_type__trigger">
					<Select.Value placeholder="Select Range" />
					<Select.Icon className="SelectIcon">
						<FaChevronDown size={12} style={{ marginTop: 3 }} />
					</Select.Icon>
				</div>
			</Select.Trigger>

			<Select.Portal>
				<Select.Content
					className="list-form__dropdown__viewport"
					position="popper"
					alignOffset={6}
				>
					<Select.Viewport className="">
						<Select.Group>
							{dropdownFields.map((ele) => (
								<Select.Item
									className="list-form__dropdown__item"
									key={ele.name}
									value={ele.symbol}
								>
									<div className="currency-dropdown__list">
										<img src={ele.img} alt={ele.name} />
										<div className="currency-dropdown__text">
											<p className="text-white font-bold">
												{ele.name}
											</p>
											<Select.ItemText>
												<span>{ele.symbol}</span>
											</Select.ItemText>
										</div>
										<Select.ItemIndicator className="currency-dropdown__icon">
											<img src={CheckIcon} alt="" />
										</Select.ItemIndicator>
									</div>
								</Select.Item>
							))}
						</Select.Group>
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
};

export default CurrencyDropDown;
