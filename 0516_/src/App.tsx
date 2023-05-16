import React, { useEffect, useState } from 'react';
function App() {
	return (
		<div>
			<Counter4UseEffect />
			<Counter1 />
		</div>
	);
}

function Counter4UseEffect() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setInterval(() => {
			// setCount(count + 1);
			setCount((oldCount) => oldCount + 1);
		}, 1000);
	}, []);
	return (
		<div>
			<h1>useEffect, setInterval</h1>
			{count}
		</div>
	);
}

function Counter1() {
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
			</button>{' '}
			{count}
		</div>
	);
}
export default App;
