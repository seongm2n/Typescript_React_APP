import React, { useState } from 'react';

type Counter1Props = {
	value: number;
	onChange: (value: number) => void;
};
function Counter1({ value, onChange }: Counter1Props) {
	return (
		<div>
			<h1>Counter</h1>
			<button
				onClick={() => {
					onChange(value);
				}}
			>
				+
			</button>
			{value}
		</div>
	);
}

type Counter2Props = {
	value: number;
};
function Counter2({ value }: Counter2Props) {
	return <div>{value}</div>;
}

function App() {
	const [count, setCount] = useState(10);
	return (
		<div>
			<Counter1
				value={count}
				onChange={(value) => {
					setCount(value + 1);
				}}
			></Counter1>
			<Counter2 value={count}></Counter2>
		</div>
	);
}

export default App;
