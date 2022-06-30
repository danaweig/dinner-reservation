import React from "react";
import {
	styled,
	Container,
	AppBar,
	Box,
	List,
	ListItem,
	Toolbar,
	Typography,
	Switch,
} from "@mui/material";

import { NavLink } from "react-router-dom";

export default function DrawerAppBar(props) {
	const { mode, setMode } = props;

	const MenuListItem = styled(ListItem)(({ theme }) => ({
		width: "auto",
		"& a": {
			color: "#fff",
			margin: "0 20px",
			textDecoration: "none",
			"&:hover": {
				textDecoration: "underline",
			},
			"&.active": {
				fontWeight: "bold",
			},
		},
	}));

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar component="nav">
				<Container>
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							component="p"
							sx={{ minWidth: "200px" }}
						>
							Dinner Reservation
						</Typography>
						<List
							sx={{
								display: "flex",
								marginLeft: "70px",
								justifyContent: "flex-start",
								width: "100%",
							}}
						>
							<MenuListItem disablePadding>
								<NavLink to="/">Home</NavLink>
							</MenuListItem>
							<MenuListItem disablePadding>
								<NavLink to="/reservations">
									Reservations
								</NavLink>
							</MenuListItem>

							<MenuListItem sx={{ marginLeft: "auto" }}>
								<Typography variant="p" component="p">
									{mode} Mode
								</Typography>
								<Switch onChange={() => setMode(mode)} />
							</MenuListItem>
						</List>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
