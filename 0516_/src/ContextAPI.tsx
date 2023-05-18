import React from 'react';
import { ContextAPISub } from './ContextAPISub';
import { MyThemeProvider } from './initTheme';

export function ContextAPI() {
	return (
		<MyThemeProvider
			value={{
				button: {
					border: '10px dotted pink',
				},
			}}
		>
			<div className='layout'>
				<h1>Context api</h1>
				<button>+</button>
				<ContextAPISub></ContextAPISub>
			</div>
		</MyThemeProvider>
	);
}
