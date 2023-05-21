import React from 'react';
import { ContextAPISub } from './ContextAPISub';
import { MyThemeProvider } from './initTheme';
import { ButtonGroup, Button } from '@mui/material';

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
				<ButtonGroup>
					<Button variant='contained'>+</Button>
				</ButtonGroup>
				<ContextAPISub></ContextAPISub>
			</div>
		</MyThemeProvider>
	);
}
