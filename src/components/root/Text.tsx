import React from 'react';

interface TextProps {
	children: React.ReactNode;
	className?: string;
}

export default function Text({ children, className = '' }: TextProps) {
	return <p className={` ${className}`}>{children}</p>;
}
