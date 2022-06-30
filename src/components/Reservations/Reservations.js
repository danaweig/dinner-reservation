import React, { useState, useEffect } from "react";
import Reservation from "./Reservation";
import Container from "@mui/material/Container";
import { styled, Button } from "@mui/material";

import { Add } from "@mui/icons-material";
import { mealOptions } from "./mealUtils";

export default function Reservations() {
	const [reservations, setReservations] = useState([]);
	const [showAddButton, setShowAddButton] = useState(false);

	const AddButton = styled(Button)({
		width: "160px",
		margin: "20px",
		marginLeft: "0",
	});
	const saveReservation = (id, resvItem) => {
		const newResv = [...reservations];
		const indexResv = reservations.findIndex((item) => item.id === id);
		newResv[indexResv] = { ...resvItem };
		setReservations(newResv);
	};
	const addReservation = () => {
		const newResv = {
			id: Math.random(),
			stage: 0,
		};
		const newReservations = [...reservations];
		setReservations([...newReservations, newResv]);
	};
	const removeReservation = (id) => {
		setReservations(reservations.filter((item) => item.id !== id));
	};
	useEffect(() => {
		if (reservations.length === 0) {
			addReservation();
		} else {
			if (
				reservations[reservations.length - 1].stage ===
				mealOptions.length
			) {
				setShowAddButton(true);
			}
		}
	}, [reservations]);
	return (
		<div className="Reservations">
			<Container>
				{reservations.length ? (
					reservations.map((item) => {
						return (
							<Reservation
								onSave={saveReservation}
								onRemove={removeReservation}
								key={item.id}
								reservation={item}
							/>
						);
					})
				) : (
					<></>
				)}
				{showAddButton && (
					<AddButton
						startIcon={<Add />}
						variant="contained"
						color="primary"
						size="small"
						onClick={() => {
							setShowAddButton(false);
							addReservation();
						}}
					>
						Add new guest
					</AddButton>
				)}
			</Container>
		</div>
	);
}
