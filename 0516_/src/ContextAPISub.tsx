import React, { useContext } from 'react';
import { theme } from './initTheme';

export function ContextAPISub() {
	const myTheme = useContext(theme);
	return (
		<div className='layout'>
			<h1>Sub</h1>
			<button style={myTheme.button}>+</button>
		</div>
	);
}
