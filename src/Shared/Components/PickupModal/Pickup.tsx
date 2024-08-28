import React from "react";
import { Container } from "./Pickup.style";
import { ArrowLeftIcon, CircleDismissIcon } from "../../../assets";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../Features/modal/modalSlice";
import { actions } from "../../../Features/user/userSlice";
const PickupModal: React.FC<{
	setPickUpStation: (pickup_station: string) => void;
}> = ({ setPickUpStation }) => {
	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(closeModal("pickup"));
	};

	const handleRadioSelection = async (value: string) => {
		setPickUpStation(value);
		let pickUpStation;
		if (value === "north_gate") {
			pickUpStation = "North Gate";
		} else if (value === "south_gate") {
			pickUpStation = "South Gate";
		} else {
			pickUpStation = "Westgate";
		}
		dispatch(
			actions.setPickUpStation({
				value: pickUpStation,
				type: "pickup_station",
				slug: value,
				school: "futa",
				meta: {
					previous_value: "",
					current_value: value,
					is_valid: true,
					error_message: "",
					price: "2000",
				},
			})
		);
	};

	return (
		<Container>
			<div className="header">
				<ArrowLeftIcon onClick={handleCancel} />
				<p>Select Pickup Station</p>
				<CircleDismissIcon onClick={handleCancel} />
			</div>
			<div className="content">
				<div
					className="flex"
					style={{
						gap: 0,
						paddingBottom: 10,
					}}
				>
					<label className="radio-container">
						<input
							type="radio"
							name="option"
							value="north_gate"
							onChange={(e: any) => handleRadioSelection(e.target.value)}
						/>
						<span className="checkmark"></span>
					</label>
					<div style={{ width: "100%" }}>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<h2>
								<span>North Gate Pickup Station</span>
								<span
									style={{
										marginLeft: 20,
										background: "#00B5174D",
										color: "#00B517",
										borderRadius: 29,
										padding: "0 10px",
									}}
								>
									N2,000
								</span>
							</h2>
						</div>
						<p>North Gate</p>
					</div>
				</div>
			</div>

			<div className="content">
				<div
					className="flex"
					style={{
						gap: 0,
						paddingBottom: 10,
					}}
				>
					<label className="radio-container">
						<input
							type="radio"
							name="option"
							value="south_gate"
							onChange={(e: any) => handleRadioSelection(e.target.value)}
						/>
						<span className="checkmark"></span>
					</label>
					<div style={{ width: "100%" }}>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<h2>
								<span>South Gate Pickup Station</span>
								<span
									style={{
										marginLeft: 20,
										background: "#00B5174D",
										color: "#00B517",
										borderRadius: 29,
										padding: "0 10px",
									}}
								>
									N2,000
								</span>
							</h2>
						</div>
						<p>South Gate</p>
					</div>
				</div>
			</div>

			<div className="content">
				<div
					className="flex"
					style={{
						gap: 0,
						paddingBottom: 10,
					}}
				>
					<label className="radio-container">
						<input
							type="radio"
							name="option"
							value="west_gate"
							onChange={(e: any) => handleRadioSelection(e.target.value)}
						/>
						<span className="checkmark"></span>
					</label>
					<div style={{ width: "100%" }}>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<h2>
								<span>West Gate Pickup Station</span>
								<span
									style={{
										marginLeft: 20,
										background: "#00B5174D",
										color: "#00B517",
										borderRadius: 29,
										padding: "0 10px",
									}}
								>
									N2,000
								</span>
							</h2>
						</div>
						<p>West Gate</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default PickupModal;
