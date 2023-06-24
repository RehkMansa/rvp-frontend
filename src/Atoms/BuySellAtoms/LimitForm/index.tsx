import PriceOnlyInput from '@/Atoms/PriceOnlyInput';
import './index.css';
import InputLabelWrapper from '@/Atoms/InputLabelWrapper';
import * as Select from '@radix-ui/react-select';
import { FaChevronDown } from 'react-icons/fa';

const options = [
	{
		label: 'Limit price',
	},
	{
		label: 'Amount',
	},
];

const dropdownFields = [
	'Fill or kill',
	'Good till cancelled',
	'Good till date',
	'Immediate or cancel',
];

const LimitForm = () => {
	return (
		<div className="limit-form">
			{options.map(({ label }) => (
				<PriceOnlyInput key={label} label={label} />
			))}

			<Select.Root>
				<Select.Trigger>
					<InputLabelWrapper label="Type">
						<div className="limit-form_type__trigger">
							<Select.Value placeholder={dropdownFields[1]} />
							<Select.Icon className="SelectIcon">
								<FaChevronDown
									size={12}
									style={{ marginTop: 3 }}
								/>
							</Select.Icon>
						</div>
					</InputLabelWrapper>
				</Select.Trigger>

				<Select.Portal>
					<Select.Content>
						<Select.Viewport>
							<Select.Group>
								{dropdownFields.map((ele) => (
									<Select.Item key={ele} value={ele}>
										<Select.ItemText>{ele}</Select.ItemText>
									</Select.Item>
								))}
							</Select.Group>
						</Select.Viewport>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</div>
	);
};

export default LimitForm;
