import React, { useState } from 'react';
function CounterState() {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);
	return (
		<div>
			<h1>Counter - state, Form</h1>
			<input
				type='number'
				value={step}
				onChange={(e) => {
					setStep(Number(e.target.value));
				}}
			/>
			<button
				onClick={() => {
					setCount((count===undefined ? 0:count)+step);
				}}
			>
				+
			</button>{' '}
			{count}
		</div>
	);
}
function App() {
	return <CounterState />;
}

export default App;
