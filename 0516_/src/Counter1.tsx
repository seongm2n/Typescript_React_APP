import { Button } from '@mui/material';
import React, { useState } from 'react';

export function Counter1() {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);
	return (
		<div className='layout'>
			<h1>Counter - state, Form</h1>
			<input
				type='number'
				value={step}
				onChange={(e) => {
					setStep(Number(e.target.value));
				}}
				style={{padding:15}}
			/>
			<Button
				variant='contained'
				style={{
					border: 'none',
					background: 'none',
					fontSize: 20,
					cursor: 'pointer',
				}}
				onClick={() => {
					setCount((count === undefined ? 0 : count) + step);
				}}
			>
				🍔
			</Button>{' '}
			{count}
		</div>
	);
}
