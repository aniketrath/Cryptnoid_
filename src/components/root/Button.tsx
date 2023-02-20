import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
}

export default function Button({
	children,
	className = '',
	onClick = () => { },
	disabled = false,
}: ButtonProps) {
	return (
		<button className={`rounded-md ${className} `} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
