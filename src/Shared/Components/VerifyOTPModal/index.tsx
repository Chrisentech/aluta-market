import React, { useRef, useEffect, useState } from "react";
import {
	Container,
	FormControl,
	Img,
	Input,
	ResendButton,
	SuccessContainer,
	Top,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../../../Features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";
import useUsers from "../../../Features/user/userActions";
import { keySquare, tickCircle } from "../../../assets";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MaskNumber, setCookie } from "../../Utils/helperFunctions";
const formatTime = (seconds: number): string => {
	const minutes = Math.floor(seconds / 60);
	const secs = seconds % 60;
	return `${minutes}m:${secs < 10 ? `0${secs}` : secs}s`;
};
const VerifyOTPModal: React.FC<{
	url?: string;
	number?: string;
	error?: string;
}> = ({ url, number, error }) => {
	const [loading, setLoading] = useState(false);
	const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
	const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
	const { verifyOTP } = useUsers();
	const inputRef = useRef<HTMLInputElement>(null);
	const [resend, setResend] = useState(false);
	const [timer, setTimer] = useState(0); // Timer in seconds
	const [isVerified, setVerified] = useState<boolean>(false);
	const [attempts, setAttempts] = useState<number>(() => {
		// Initialize attempts from localStorage
		const savedAttempts = localStorage.getItem("otpAttempts");
		return savedAttempts ? parseInt(savedAttempts, 10) : 1;
	});
	let nav = useNavigate();
	const dispatch = useDispatch();

	// Effect to handle countdown timer
	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (resend && timer > 0) {
			interval = setInterval(() => {
				setTimer((prev) => prev - 1);
			}, 1000);
		} else if (timer === 0) {
			setResend(false);
		}
		return () => clearInterval(interval);
	}, [resend, timer]);

	// Effect to reset resend state and timer after a successful submission or resend
	useEffect(() => {
		if (resend) {
			setTimer(180); // 3 minutes cooldown period
		}
	}, [resend]);

	// Check if the user has entered all the values for the OTP
	useEffect(() => {
		let key = 0;
		for (let i = 0; i < otp.length; i++) {
			if (otp[i]) {
				key++;
			}
			if (key === otp.length) {
				let value = {
					phone: number ?? "+447577833627",
					code: Number(otp.join("")),
				};
				handleSubmit(value);
			}
		}
	}, [otp]);

	const onPaste = async (val: any) => {
		const pasted = val.clipboardData.getData("text/plain");
		if (!!parseInt(pasted)) {
			const newOtp = pasted.slice(0, otp.length).split(""); // Ensure pasted value fits OTP length
			setOtp(newOtp);
			setActiveOtpIndex(
				newOtp.length >= otp.length ? otp.length - 1 : newOtp.length
			);
		}
	};

	const handleSubmit = async (values: any) => {
		setLoading(true);
		setAttempts((prev) => {
			const newAttempts = prev + 1;
			localStorage.setItem("otpAttempts", newAttempts.toString()); // Persist attempts in localStorage
			return newAttempts;
		});

		try {
			const resp: any = await verifyOTP({ attempts, ...values });
			dispatch(alertSuccess("Verification successful!"));
			localStorage.removeItem("otpAttempts"); // Clear attempts on success
			setVerified(true);
			setLoading(false);
			setCookie("user_id", resp?.id, 0);
			setCookie("access_token", resp?.access_token, 0);
			setTimeout(() => {
				if (url) {
					nav(url);
				}
			}, 1500);
			dispatch(closeModal("VerifyOTP"));
		} catch (error: any) {
			setLoading(false);
			console.log(error);
			for (let index = 0; index < error.graphQLErrors.length; index++) {
				dispatch(alertError(error.graphQLErrors[index].message));
			}
		} finally {
			setLoading(false);
		}
	};

	const handleOnChange = (
		{ target }: React.ChangeEvent<HTMLInputElement>,
		index: number
	): void => {
		const { value } = target;
		const newOTP: string[] = [...otp];

		// Set the OTP value to the last character of the input (only 1 digit)
		newOTP[index] = value.slice(-1);

		setOtp(newOTP);

		// If value is not empty, move focus to the next field, else stay
		if (value) {
			if (index < otp.length - 1) {
				setActiveOtpIndex(index + 1); // Move to the next input
			}
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === "Backspace") {
			const newOTP = [...otp];
			if (!otp[index]) {
				// If the current field is empty, move focus to the previous input
				if (index > 0) setActiveOtpIndex(index - 1);
			} else {
				// If the field is not empty, clear the current value
				newOTP[index] = "";
				setOtp(newOTP);
				setActiveOtpIndex(index); // Stay on the same field
			}
		}
	};

	// Ensure focus management after all inputs are filled or being edited
	const handleInputClick = (index: number) => {
		setActiveOtpIndex(index); // Set focus to the clicked field
	};

	const handleResendClick = () => {
		setResend(true);
		if (timer === 0) {
			setResend(true);
		}
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, [activeOtpIndex]);

	return (
		<Container success={isVerified}>
			<Top>
				<AiOutlineCloseCircle
					className="close-button"
					onClick={() => dispatch(closeModal("VerifyOTP"))}
					color="#292D32"
					size="34px"
				/>
				{error && (
					<div
						style={{
							background: "pink",
							color: "#002",
							padding: 5,
							margin: 5,
							height: "100%",
							width: "94%",
							borderRadius: 5,
							display: "flex",
							alignItems: "center",
						}}
					>
						{error}
					</div>
				)}
			</Top>
			{isVerified ? (
				<SuccessContainer>
					<Img background="#00B517">
						<img width={48} src={tickCircle} alt="otp-verification success" />
					</Img>
					<label className="label">Number Verified</label>
				</SuccessContainer>
			) : (
				<FormControl>
					<Img background="#FA3434">
						<img width={48} src={keySquare} alt="verify-otp-logo" />
					</Img>
					<label className="label">Verify OTP</label>
					<p className="message">{`Input the OTP sent to ${
						number ? MaskNumber(number) : "0802*****43"
					}`}</p>
					<div>
						{otp.map((_, index: number) => (
							<React.Fragment key={index}>
								<Input
									disabled={loading}
									ref={index === activeOtpIndex ? inputRef : null}
									value={otp[index]}
									onChange={(e) => handleOnChange(e, index)}
									onClick={() => handleInputClick(index)} // Allow manual clicking
									onKeyDown={(e) => handleKeyDown(e, index)}
									type="number"
									onPaste={onPaste}
								/>
							</React.Fragment>
						))}
					</div>
					<span className="message">
						Didn’t receive OTP? <span style={{ width: "0.3rem" }}></span>
						<ResendButton
							onClick={handleResendClick}
							disabled={resend && timer > 0}
							style={{
								color: "red !important",
								background: "transparent !important",
							}}
						>
							Resend Code {resend && timer > 0 ? `(${formatTime(timer)})` : ""}
						</ResendButton>
					</span>
				</FormControl>
			)}
		</Container>
	);
};

export default VerifyOTPModal;
