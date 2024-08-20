import React, { useEffect, useState } from "react";
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
import ModalContent from "./modals";
import { fetchMe } from "../../../../Features/user/userSlice";
import { filterNum } from "../../../../Shared/Utils/helperFunctions";

const Screen: React.FC = () => {
	const dispatch = useDispatch();

	const me = useSelector(fetchMe);
	const [fullname, setFullname] = useState(me?.fullname);
	const [email, setEmail] = useState(me?.email);
	const parsedPhone = me?.phone ? parseInt(me.phone) : 0;
	const [phone, setPhone] = useState(filterNum(parsedPhone));
	const [gender, setGender] = useState(me?.gender);
	const [dob, setDob] = useState(me?.dob);
	const [password, setPassword] = useState("");
	const [showPasswordField, setShowPasswordField] = useState(false);

	useEffect(() => {
		setFullname(me?.fullname);
		setEmail(me?.email);
		setPhone(filterNum(parsedPhone));
		setGender(me?.gender);
		setDob(me?.dob);
	}, [me?.fullname]);
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
								<InputField
									type="email"
									value={email}
									onChange={(e: any) => setEmail(e.target.value)}
								/>
							</label>
							<label>
								Phone Number
								<InputField
									type="email"
									value={"+234" + phone}
									onChange={(e: any) => {
										setPhone(e.target.value);
									}}
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
							<img
								src={
									me?.avatar ??
									"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
								}
								className="avatar"
								alt="..."
								width={80}
								height={80}
							/>
							<AddImage>
								<img src={messageEdit} />
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
						<Button background="#0D6EFD" color="#fff" gap={10} padding={20}>
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

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={false}
			showModal={activeModal}
			navMode="noSearch"
			popUpContent={
				activeModal === "logout" ? (
					<LogoutModal />
				) : (
					<ModalContent active={activeModal} />
				)
			}
			modalWidth={500}
		/>
	);
};

export default Profile;
