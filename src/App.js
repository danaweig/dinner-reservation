import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BackButton from "./components/UI/BackButton";
import Reservations from "./components/Reservations/Reservations";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";

function App() {
	const [mode, setMode] = useState("light");
	const location = useLocation();
	const toggleMode = (prevMode) => {
		setMode(prevMode === "light" ? "dark" : "light");
	};

	const currentTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<div className="App">
			<ThemeProvider theme={currentTheme}>
				<Box
					sx={{
						width: "100%",
						minHeight: "100vh",
						bgcolor: "background.default",
						color: "text.primary",
					}}
				>
					<Navbar setMode={toggleMode} mode={mode} />
					<Box
						sx={{
							marginTop: "100px",
						}}
					>
						{location.pathname !== "/" &&
							location.pathname !== "/home" && <BackButton />}

						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route
								path="/reservations"
								element={<Reservations />}
							/>
						</Routes>
					</Box>
				</Box>
			</ThemeProvider>
		</div>
	);
}
export default App;
