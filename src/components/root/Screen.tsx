import React from 'react';

interface ScreenProps {
	children: React.ReactNode;
	className?: string;
}

export default function Screen({ children, className = '' }: ScreenProps) {
	return <div className={`w-screen min-h-screen ${className}`}>{children}</div>;
}
