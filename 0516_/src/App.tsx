import React from 'react';
import { Counter4UseEffect } from './Counter4UseEffect';
import { Counter1 } from './Counter1';
import { Container, Grid } from '@mui/material';

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
				>
					<Counter4UseEffect />
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
				>
					<Counter1 />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
