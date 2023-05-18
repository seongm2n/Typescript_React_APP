import React, { useState } from 'react';

function Counter1() {
	const [count, setCount] = useState(10);
	return (
		<div>
			<h1>Counter</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
			{count}
		</div>
	);
}
function Counter2() {
	const count = 10;
	return <div>{count}</div>;
}
function App() {
	return (
		<div>
			<Counter1></Counter1>
			<Counter2></Counter2>
		</div>
	);
}

export default App;
