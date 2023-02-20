import React from 'react';

interface BoxProps {
	children?: React.ReactNode;
	className?: string;
	horizontal?: boolean;
}

export default function Box({ children, className = '', horizontal = false }: BoxProps) {
	if (horizontal) {
		return <div className={`flex flex-row ${className}`}>{children}</div>;
	}

	return <div className={`flex flex-col ${className}`}>{children}</div>;
}
