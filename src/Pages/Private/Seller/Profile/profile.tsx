import React, { useEffect, useRef, useState } from "react";
import {
	AddImage,
	Body,
	InputField,
	ProfileImage,
	Wrapper,
} from "./Profile.style";
import Layout from "../../../../Layouts";
import { messageEdit } from "../../../../assets";
import { Button, Card, LogoutModal } from "../../../../Shared/Components";
import { useDispatch, useSelector } from "react-redux";
import {
	selectActiveModal,
	showModal,
} from "../../../../Features/modal/modalSlice";
import { fetchMe } from "../../../../Features/user/userSlice";
import { filterNum } from "../../../../Shared/Utils/helperFunctions";
import useUsers from "../../../../Features/user/userActions";
import axios from "axios";
import {
	alertError,
	alertSuccess,
} from "../../../../Features/alert/alertSlice";

const Screen: React.FC = () => {
	const dispatch = useDispatch();

	const me: any = useSelector(fetchMe);
	const { updateUser } = useUsers();
	const [fullname, setFullname] = useState(me?.fullname);
	const [email, setEmail] = useState(me?.email);
	const parsedPhone = me?.phone ? parseInt(me.phone) : 0;
	const [phone, setPhone] = useState(filterNum(parsedPhone));
	const [gender, setGender] = useState(me?.gender);
	const [dob, setDob] = useState(me?.dob);
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [showPasswordField, setShowPasswordField] = useState(false);
	const [imgLoading, setImgLoading] = useState(false);
	const [btnDisabeled, setBtnDisabled] = useState(false);
	const [profileImg, setProfileImg] = useState<string | ArrayBuffer | null>(
		me?.avatar || null
	);
	const profileImgInputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		setFullname(me?.fullname);
		setEmail(me?.email);
		setPhone(filterNum(parsedPhone));
		setGender(me?.gender);
		setProfileImg(me?.avatar);
		setDob(me?.dob);
	}, [me]);
	const handleProfileImgChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];
		setImgLoading(true);
		if (file) {
			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset", "rbwlt6de");
			try {
				const response = await axios.post(
					"https://api.cloudinary.com/v1_1/de7i4zy3m/image/upload",
					formData
				);
				setImgLoading(false);

				const imageUrl = response.data.secure_url;
				setProfileImg(imageUrl);
				console.log("Uploaded image URL:", imageUrl);
			} catch (error) {
				console.error("Error uploading image:", error);
				setImgLoading(false);
			}
		}
	};

	// Changes to make button disabled
	useEffect(() => {
		if (
			fullname?.trim() === me?.fullname?.trim() &&
			phone === filterNum(me?.phone?.trim()) &&
			gender?.trim() === me?.gender?.trim() &&
			dob?.trim() === me?.dob?.trim() &&
			profileImg === me?.avatar
		) {
			setBtnDisabled(true);
		} else {
			setBtnDisabled(false);
		}
	}, [fullname, phone, gender, dob, profileImg, me]);
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		const payload = {
			id: me?.id,
			fullname: fullname?.trim() === me?.fullname?.trim() ? "" : fullname,
			phone: phone === me?.phone?.trim() ? "" : phone,
			gender: gender?.trim() === me?.gender?.trim() ? "" : gender,
			dob: dob?.trim() === me?.dob?.trim() ? "" : dob,
			password: password?.trim() === me?.password?.trim() ? "" : password,
			avatar: profileImg === me?.avatar ? "" : profileImg,
		};
		try {
			await updateUser(payload);
			dispatch(alertSuccess("Update successful."));
			setBtnDisabled(true);
			setLoading(false);
		} catch (error: any) {
			setLoading(false);
			if (error.graphQLErrors && error.graphQLErrors.length > 0) {
				for (let index = 0; index < error.graphQLErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.graphQLErrors[index].message).message)
					);
				}
			}
			if (error.protocolErrors && error.protocolErrors.length > 0) {
				for (let index = 0; index < error.protocolErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.protocolErrors[index].message).message)
					);
				}
			}
			if (error.clientErrors && error.clientErrors.length > 0) {
				for (let index = 0; index < error.clientErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.clientErrors[index].message).message)
					);
				}
			}
			if (error.networkErrors && error.networkErrors.length > 0) {
				for (let index = 0; index < error.networkErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.networkErrors[index].message).message)
					);
				}
			}
		}
	};
	return (
		<Wrapper>
			<h1>My Profile</h1>
			<Body>
				<div className="top">
					<div className="left">
						<h3>Personal Details</h3>
						<div className="form">
							<label>
								Full Name
								<InputField
									type="text"
									value={fullname}
									onChange={(e: any) => setFullname(e.target.value)}
								/>
							</label>
							<label>
								Email
								<InputField type="email" value={email} readOnly disabled />
							</label>
							<label>
								Phone Number
								<InputField
									type="text"
									value={phone}
									onChange={(e: any) => setPhone(e.target.value)}
								/>
							</label>
						</div>
						<div className="gender-birthday">
							<label className="gender">
								Gender
								<select
									value={gender}
									onChange={(e: any) => setGender(e.target.value)}
								>
									<option value="" disabled>
										Select option
									</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</label>
							<label className="birthday">
								Birthday
								<div>
									<InputField
										type="date"
										value={dob}
										onChange={(e) => setDob(e.target.value)}
									/>
								</div>
							</label>
						</div>
						<div className="password-panel">
							<h3>Password</h3>
							{showPasswordField ? (
								<div className="gender-birthday" style={{ marginTop: 0 }}>
									<label className="gender">
										Old Password
										<div>
											<InputField
												type="password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
									</label>
									<label className="birthday">
										New Password
										<div>
											<InputField
												type="password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
									</label>
								</div>
							) : (
								<div
									className="change-password"
									onClick={() => setShowPasswordField(true)}
								>
									Change password
								</div>
							)}
						</div>
					</div>
					<div className="right">
						<ProfileImage>
							<input
								type="file"
								accept="image/png, image/jpg"
								ref={profileImgInputRef}
								style={{ display: "none" }}
								onChange={handleProfileImgChange}
							/>
							<img
								src={profileImg as string}
								className="avatar"
								alt="..."
								onClick={() => profileImgInputRef.current?.click()}
								width={80}
								height={80}
							/>
							<AddImage>
								<img
									onClick={() => profileImgInputRef.current?.click()}
									src={messageEdit}
									style={{ cursor: "pointer" }}
								/>
							</AddImage>
						</ProfileImage>
						<Card
							width="100%"
							height={88}
							background="#EFF2F4"
							className="deactivate"
						>
							<div className="top-card">
								<p className="top-text">Delete Account</p>
								<Button
									color="#FA3434"
									width={96}
									height={27}
									className="deactivate-button"
									onClick={() => dispatch(showModal("deleteAccount"))}
								>
									Deactivate
								</Button>
							</div>
							<p>
								Heads up Comrade! Once you take this step no going back. Be very
								certain!
							</p>
						</Card>
					</div>
				</div>
				<div className="foot">
					<div className="buttons">
						<Button
							disabled={btnDisabeled || imgLoading}
							background="#0D6EFD"
							color="#fff"
							loading={loading}
							gap={10}
							padding={20}
							onClick={handleSubmit}
						>
							Save Changes
						</Button>
						<Button
							border="1px solid #DEE2E7"
							color="#0D6EFD"
							gap={10}
							padding={20}
						>
							Cancel
						</Button>
					</div>
				</div>
			</Body>
		</Wrapper>
	);
};

const Profile = () => {
	const activeModal = useSelector(selectActiveModal);
	const me = useSelector(fetchMe);

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={!me}
			showModal={activeModal}
			navMode="noSearch"
			popUpContent={<LogoutModal />}
			modalWidth={500}
		/>
	);
};

export default Profile;
