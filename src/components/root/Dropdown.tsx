import React from 'react';

interface DropDownProps {
	className?: string;
	onChange?: (text: string) => void;
	value?: string;
	options: string[];
}

export default function Dropdown({ className, onChange, value, options }: DropDownProps) {
	return (
		<select
			className={`bg-transparent  rounded-md py-2 px-4 text-dark focus:outline-none  ${className}`}
			value={value}
			onChange={(e) => onChange && onChange(e.target.value)}
		>
			{options.map((option, index) => {
				return (
					<option key={index} value={option}>
						{option}
					</option>
				);
			})}
		</select>
	);
}
