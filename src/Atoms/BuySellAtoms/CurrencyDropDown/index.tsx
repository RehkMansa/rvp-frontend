import InputLabelWrapper from '@/Atoms/InputLabelWrapper';
import * as Select from '@radix-ui/react-select';
import { FaChevronDown } from 'react-icons/fa';

const dropdownFields = [
	'Fill or kill',
	'Good till cancelled',
	'Good till date',
	'Immediate or cancel',
];

const CurrencyDropDown = () => {
	return (
		<Select.Root defaultValue={dropdownFields[1]}>
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
									key={ele}
									value={ele}
								>
									<Select.ItemText>
										<p>{ele}</p>
									</Select.ItemText>
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
