import React from 'react';

interface DateInputProps {
	className?: string;
	onChange?: (text: string) => void;
	value?: string;
	min?: string;
	max?: string;
}

export default function DateInput(props: DateInputProps) {
	return (
		<input
			className={`bg-transparent  rounded-md py-2 px-4 text-dark focus:outline-none  ${props.className}`}
			type='date'
			min={props.min || '1900-01-01'}
			max={props.max || '2100-01-01'}
			value={props.value}
			onChange={(e) => props.onChange && props.onChange(e.target.value)}
		/>
	);
}
