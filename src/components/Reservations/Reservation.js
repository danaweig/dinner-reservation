import React, { useState } from "react";
import { Box, styled, TextField, Autocomplete, Button } from "@mui/material";
import { Remove } from "@mui/icons-material";

import { mealOptions } from "./mealUtils";

export default function Reservation({ reservation, onRemove, onAdd, onSave }) {
	const [resv, setResv] = useState({});
	const [stage, setStage] = useState(0);

	const AutocompleteResv = styled(Autocomplete)({
		width: "200px",
		margin: "10px 20px 10px 0",
	});

	const getOptions = (course) => {
		return { options: course.dishes.map((option) => option.title) };
	};

	const courses = mealOptions.map((course) => course.id);
	const onChangeReservation = (newValue, keyToUpdate, keyIdxToUpdate) => {
		const newResv = { ...resv };

		newResv[keyToUpdate] = newValue; // update reservation

		courses.forEach((key, i) => {
			// initialize next steps
			if (i > keyIdxToUpdate) {
				newResv[key] = "";
			}
		});
		setResv(newResv);
		setStage(keyIdxToUpdate + 1);
		if (stage === courses.length - 1) {
			onSave(reservation.id, {
				...reservation,
				...newResv,
				stage: stage + 1,
			});
		}
	};
	return (
		<div className="Reservation">
			<Box
				sx={{
					alignItems: "center",
					justifyContent: "flex-start",
					display: "flex",
				}}
			>
				{mealOptions &&
					mealOptions
						.filter((course, index) => index <= stage)
						.map((course, index) => {
							return (
								<AutocompleteResv
									key={course.id}
									{...getOptions(course)}
									disableClearable
									onChange={(e, newValue) => {
										if (newValue) {
											onChangeReservation(
												newValue,
												course.id,
												index
											);
										}
									}}
									value={resv[course.id]}
									renderInput={(params) => (
										<TextField
											{...params}
											label={course.title}
											InputLabelProps={{
												shrink: true,
											}}
											variant="standard"
										/>
									)}
								/>
							);
						})}
				{stage === courses.length && (
					<Button
						startIcon={<Remove />}
						variant="contained"
						color="primary"
						size="small"
						onClick={() => {
							onRemove(reservation.id);
						}}
					>
						Remove guest
					</Button>
				)}
			</Box>
		</div>
	);
}
