import React from 'react';

interface TextInputProps {
	className?: string;
	onChange?: (text: string) => void;
	placeholder?: string;
	value?: string;
	type?: 'text' | 'password';
	multiline?: boolean;
}

export default function TextInput(props: TextInputProps) {
	if (props.multiline) {
		return (
			<textarea
				className={`bg-transparent  rounded-md py-2 px-4 text-dark focus:outline-none  ${props.className}`}
				placeholder={props.placeholder}
				value={props.value}
				onChange={(e) => props.onChange && props.onChange(e.target.value)}
			/>
		);
	}

	return (
		<input
			className={`bg-transparent  rounded-md py-2 px-4 text-dark focus:outline-none  ${props.className}`}
			type={props.type || 'text'}
			placeholder={props.placeholder}
			value={props.value}
			onChange={(e) => props.onChange && props.onChange(e.target.value)}
		/>
	);
}
