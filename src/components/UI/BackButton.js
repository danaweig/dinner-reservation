import { useNavigate } from "react-router-dom";
import { Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container } from "@mui/system";

export default function BackButton() {
	let navigate = useNavigate();

	return (
		<div className="BackButton">
			<Container sx={{marginBottom:"30px"}}>
				<Chip
					label="Back"
					variant="outlined"
					icon={<ArrowBackIcon />}
					onClick={() => navigate(-1)}
				/>
			</Container>
		</div>
	);
}
