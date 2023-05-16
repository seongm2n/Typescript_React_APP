import React from 'react';
import { Counter4UseEffect } from './Counter4UseEffect';
import { Counter1 } from './Counter1';
import {
	Button,
	Container,
	Grid,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';

const darkTheme = createTheme({
	palette: {
		primary: grey,
	},
});
const globalTheme = createTheme({
	spacing: 8,
	palette: {
		primary: red,
	},
});
function App() {
	return (
		<ThemeProvider theme={globalTheme}>
			<Container>
				<Button
					variant='contained'
					style={{ marginBottom: 10 }}
				>
					Login
				</Button>
				<Grid
					container
					spacing={2}
				>
					<Grid
						item
						xs={12}
						sm={6}
					>
						<ThemeProvider theme={darkTheme}>
							<Counter4UseEffect />
						</ThemeProvider>
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
		</ThemeProvider>
	);
}

export default App;
