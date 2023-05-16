import { Button, ButtonGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';

//useEffect의 첫번째 파라미터 -> 콜백함수
//콜백함수의 return값-> 함수
//함수는 컴포넌트가 제거될때 호출
//컴포넌트가 지워지면 useEffect가 재실행

export const Counter4UseEffect = () => {
	const [count, setCount] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<Boolean>(false);
	// isRunning: true
	useEffect(() => {
		let id: string | number | NodeJS.Timer | undefined;
		if (isRunning) {
			id = setInterval(() => {
				// setCount(count + 1);
				setCount((oldCount) => oldCount + 1);
			}, 1000);
		}
		return () => {
			if (id) {
				clearInterval(id);
			}
		};
	}, [isRunning]);

	const startCount = () => {
		setIsRunning(true);
	};

	const stopCount = () => {
		setIsRunning(false);
	};

	return (
		<div className='layout'>
			<h1>useEffect, setInterval</h1>
			{count}
			<ButtonGroup style={{ margin: 10 }}>
				<Button
					variant='contained'
					onClick={startCount}
				>
					Start
				</Button>
				<Button
					variant='contained'
					onClick={stopCount}
				>
					Stop
				</Button>
			</ButtonGroup>
		</div>
	);
};
