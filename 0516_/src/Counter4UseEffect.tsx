import React, { useEffect, useState } from 'react';

export function Counter4UseEffect() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		const id = setInterval(() => {
			// setCount(count + 1);
			setCount((oldCount) => oldCount + 1);
		}, 1000);
		console.log('interval', id);
		return () => {
			console.log('unmount', id);
			clearInterval(id);
			//useEffect의 첫번째 파라미터 -> 콜백함수
			//콜백함수의 return값-> 함수
			//함수는 컴포넌트가 제거될때 호출
			//컴포넌트가 지워지면 useEffect가 재실행
		};
	}, []);
	return (
		<div>
			<h1>useEffect, setInterval</h1>
			{count}
		</div>
	);
}
