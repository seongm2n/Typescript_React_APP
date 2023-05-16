import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function Counter3() {
	const [count, setCount] = useState(0);
	//fetch from http://localhost:9999/counter
	useEffect(() => {
		fetch('http://localhost:9999/counter')
			.then((resp) => resp.json())
			.then((result) => {
				console.log(result);
				setCount(result.value);
			});
	}, []);
	return (
		<div style={{ border: '10px solid gray', padding: 20 }}>
			<h1>Counter - Ajax & useEffect</h1>
			<button
				onClick={() => {
					fetch('http://localhost:9999/counter', {
						method: 'PATCH',
						body: JSON.stringify({ value: count + 1 }),
						headers: {
							'Content-Type': 'application/json',
						},
					})
						.then((resp) => resp.json())
						.then((result) => {
							setCount(result.value);
						});
				}}
			>
				+
			</button>{' '}
			👉🏻 {count}
		</div>
	);
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
type countItemType = {
	time: string;
	step: number;
};
function Counter() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState<countItemType[]>([]);
	const styleObj = {
		border: '10px solid' + getRandomColor(),
		padding: 20,
		backgroundColor: getRandomColor(),
		boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
		color: getRandomColor(),
	};
	return (
		<div style={styleObj}>
			<h1>Counter</h1>
			<input
				type='number'
				value={step}
				onChange={(event) => {
					setStep(Number(event.target.value));
				}}
			/>
			<Button variant='contained'>+</Button>
			<button
				onClick={() => {
					const newCountItem: countItemType = {
						time: new Date().toLocaleTimeString(),
						step,
					};
					setCount([...count, newCountItem]);
				}}
			>
				+
			</button>{' '}
			👉🏻{' '}
			{count.reduce((누적값, 현재값) => {
				return 누적값 + 현재값.step;
			}, 0)}
			<table>
				<thead>
					<tr>
						<td>time</td>
						<td>step</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						{count.map((value, index) => {
							return (
								<tr key={index}>
									<td>{value.time}</td>
									<td>{value.step}</td>
								</tr>
							);
						})}
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function Counter2() {
	const [open, setOpen] = useState(false);
	return (
		<div style={{ border: '12px solid black', padding: 20 }}>
			<h1>Counter - Dialog</h1>
			<Button
				variant='contained'
				onClick={() => {
					setOpen(true);
				}}
			>
				Run
			</Button>

			{/* 팝업 형식으로 보이게 해줌 */}
			{/* (mui짱)Dialog 사용해서 UI 이쁘게 만들기 */}
			<Dialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				<DialogTitle style={{ backgroundColor: 'pink' }}>
					Dialog Count
				</DialogTitle>
				<DialogContent>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
						provident atque eveniet quas cumque, deleniti adipisci reprehenderit
						distinctio officiis corporis voluptatibus numquam! Quasi maxime
						obcaecati qui magnam consequuntur nemo sapiente?
					</p>
					<button>+</button> 👉🏻 0
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setOpen(false);
						}}
					>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
function App() {
	return (
		<Container>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
				>
					<Counter3 />
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
				>
					<Counter2 />
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
				>
					<Counter />
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
				>
					<Counter />
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
				>
					<Counter />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
