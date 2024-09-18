import React, { useEffect, useRef, useState } from "react";
import Layout from "../../../../Layouts";
import {
	AddImg,
	BackgroundImg,
	BottomPanel,
	Cardbox,
	ContactDetails,
	InputField,
	Main,
	ProfileImg,
	StoreDesc,
	TabOption,
	Tabs,
	TopPanel,
	UploadImg,
	Wrapper,
} from "./StoreSettings.style";
import { messageEdit, uploadImg } from "../../../../assets";
import { Button, Card, LogoutModal } from "../../../../Shared/Components";
import { useDispatch, useSelector } from "react-redux";
import {
	selectActiveModal,
	showModal,
} from "../../../../Features/modal/modalSlice";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import useStore from "../../../../Features/store/storeAction";
import { selectStore } from "../../../../Features/store/storeSlice";
import {
	alertError,
	alertSuccess,
} from "../../../../Features/alert/alertSlice";
import axios from "axios";
import { selectLoadingState } from "../../../../Features/loading/loadingSlice";
import MaintenanceMode from "./modals/MaintenanceMode";
import { Loader } from "../../../../Shared/Components/Button/Button.styles";

const Screen: React.FC = () => {
	const dispatch = useDispatch();
	const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);
	const { maintenanceMode, setMaintenanceMode, updateStore } = useStore();
	const store = useSelector(selectStore);
	// alert(JSON.stringify(store));
	const thumbnailInputRef = useRef<HTMLInputElement>(null);
	const profileImgInputRef = useRef<HTMLInputElement>(null);

	const [isActive, setActive] = useState(store?.status ?? false);
	const [thumbnail, setThumbnail] = useState<string | ArrayBuffer | null>(
		store?.background || null
	);
	const [profileImg, setProfileImg] = useState<string | ArrayBuffer | null>(
		store?.thumbnail || null
	);
	const [description, setDescription] = useState<string>(
		store?.description || ""
	);
	const [phone, setPhone] = useState<string>(store?.phone || "");
	const [address, setAddress] = useState<string>(store?.address || "");
	const [email, setEmail] = useState<string>(store?.email || "");
	const [imgLoading, setImgLoading] = useState(false);
	const [loading, setLoading] = useState<boolean>(false);

	const handleThumbnailChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];
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
				setThumbnail(imageUrl);
				console.log("Uploaded image URL:", imageUrl);
			} catch (error) {
				console.error("Error uploading image:", error);
				setImgLoading(false);
			}
		}
	};

	useEffect(() => {
		setThumbnail(store?.background);
		setProfileImg(store?.thumbnail);
		setPhone(store?.phone);
		setAddress(store?.address);
		setEmail(store?.email);
		setDescription(store?.description);
	}, [store]);

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
	useEffect(() => {
		console.log(maintenanceMode);
	}, [maintenanceMode]);

	const handleMaintenanceMode = async () => {
		try {
			setLoading(true);
			await updateStore({ id: store?.id, status: false });
			setMaintenanceMode(true);
			dispatch(alertSuccess("Update successful."));
			setActive(true);
		} catch (error: any) {
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
		} finally {
			setLoading(false);
		}
	};
	const saveChnageBtnDisabled =
		description?.trim() === store?.description &&
		phone?.trim() === store?.phone &&
		address?.trim() === store?.address &&
		email?.trim() === store?.email &&
		profileImg === store?.thumbnail &&
		thumbnail === store?.background;

	// alert(saveChnageBtnDisabled);s
	const handleSubmit = async () => {
		setLoading(true);

		try {
			if (typeof phone !== "string") {
				dispatch(alertError("Phone number must be a string"));

				return;
			}
			if (phone?.trim() === "") {
				dispatch(alertError("Phone number cannot be empty"));

				return;
			}
			if (email?.trim() === "") {
				dispatch(alertError("Email cannot be empty"));
				setLoading(false);
				return;
			}
			if (description?.trim() === "") {
				dispatch(alertError("Description cannot be empty"));

				return;
			}
			// if (address?.trim() === "") {
			// 	dispatch(alertError("Address cannot be empty"));

			// 	return;
			// }
			await updateStore({
				id: store?.id,
				address,
				phone,
				description,
				email,
				thumbnail: profileImg,
				background: thumbnail,
			});
			dispatch(alertSuccess("Update successful."));
		} catch (error: any) {
			// alert(error);

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
		} finally {
			setLoading(false);
		}
	};
	return (
		<Wrapper>
			<div className="flex">
				<h2>Store settings</h2>
			</div>
			<Main>
				<TopPanel>
					<BackgroundImg>
						<UploadImg>
							<img className="img" src={thumbnail as string} alt="..." />
							<img
								src={uploadImg}
								alt="..."
								onClick={() => thumbnailInputRef.current?.click()}
								style={{ position: "absolute", right: 0, cursor: "pointer" }}
							/>

							<input
								type="file"
								accept="image/*"
								ref={thumbnailInputRef}
								style={{ display: "none" }}
								onChange={handleThumbnailChange}
							/>
						</UploadImg>
					</BackgroundImg>
					<div className="store-info">
						<ProfileImg>
							<AddImg>
								<input
									type="file"
									accept="image/*"
									ref={profileImgInputRef}
									style={{ display: "none" }}
									onChange={handleProfileImgChange}
								/>
								<img className="img" src={profileImg as string} alt="..." />

								<img
									src={messageEdit}
									onClick={() => profileImgInputRef.current?.click()}
									style={{ position: "absolute", right: 0, cursor: "pointer" }}
								/>
							</AddImg>
						</ProfileImg>
						<h2 className="store-name">{store?.name}</h2>
						<Button
							className="button"
							width={117}
							border="1px solid #FA3434"
							color="#FA3434"
							onClick={() =>
								window.open(
									window.location.origin + "/" + store?.link,
									"_blank"
								)
							}
						>
							Live view
						</Button>
					</div>
				</TopPanel>
				<BottomPanel>
					<Tabs>
						<TabOption
							className="option"
							active={activeTab === 1}
							onClick={() => setActiveTab(1)}
						>
							Description
						</TabOption>
						<TabOption
							className="option"
							active={activeTab === 2}
							onClick={() => setActiveTab(2)}
						>
							Contact Detail
						</TabOption>
						<TabOption
							className="option"
							active={activeTab === 3}
							onClick={() => setActiveTab(3)}
						>
							Delete Store
						</TabOption>
					</Tabs>
					{activeTab === 1 && (
						<StoreDesc>
							<label>Store description</label>
							<textarea
								className="desc-input"
								value={description}
								onChange={(e: any) => setDescription(e.target.value)}
							/>
						</StoreDesc>
					)}
					{activeTab === 2 && (
						<ContactDetails>
							<div className="form">
								<label>
									Store Phone Number
									<InputField
										type="text"
										value={phone}
										onChange={(e: any) => setPhone(e.target.value)}
									/>
								</label>
								<label>
									Physical Address{" "}
									<span className="bracket">&#40;Optional&#41;</span>
									<InputField
										type="text"
										value={address}
										onChange={(e: any) => setAddress(e.target.value)}
									/>
								</label>
								<label>
									Business Email{" "}
									<span className="bracket">&#40;Optional&#41;</span>
									<InputField
										type="text"
										value={email}
										onChange={(e: any) => setEmail(e.target.value)}
									/>
								</label>
							</div>
						</ContactDetails>
					)}
					{activeTab === 3 && (
						<Cardbox>
							<Card
								width="354px"
								height={88}
								background="#EFF2F4"
								className="deactivate"
							>
								<div className="top-card">
									<p className="top-text">Maintenance Mode</p>
									{!isActive ? (
										!loading ? (
											<MdToggleOn
												size="55px"
												color="rgb(255 21 18 / 91%)"
												onClick={handleMaintenanceMode}
											/>
										) : (
											<Loader />
										)
									) : (
										<MdToggleOff
											size="55px"
											color="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
											onClick={() => dispatch(showModal("maintenanceMode"))}
										/>
									)}
								</div>
								<p>
									Activate Maintenance mode to make your store temporarily
									unavailable
								</p>
							</Card>
							<Card
								width="354px"
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
									Heads up Comrade! Once you take this step no going back. Be
									very certain!
								</p>
							</Card>
						</Cardbox>
					)}
					<div className="buttons">
						<Button
							height={40}
							padding={20}
							gap={10}
							loading={loading}
							type="submit"
							color="#FFF"
							disabled={saveChnageBtnDisabled || imgLoading || loading}
							background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
							onClick={handleSubmit}
						>
							Save Changes
						</Button>
						<Button
							height={40}
							padding={20}
							gap={10}
							color="#FA3434"
							background="#FFF"
							border="#DEE2E7 solid 1px"
						>
							Cancel
						</Button>
					</div>
				</BottomPanel>
			</Main>
		</Wrapper>
	);
};

const StoreSettings = () => {
	const activeModal = useSelector(selectActiveModal);
	const store = useSelector(selectStore);
	const isLoading = useSelector(selectLoadingState);
	const { maintenanceMode } = useStore();
	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={!store || isLoading}
			showModal={activeModal}
			popUpContent={
				activeModal === "maintenanceMode" ? (
					<MaintenanceMode active={maintenanceMode} />
				) : (
					<LogoutModal />
				)
			}
			navMode="noSearch"
			modalWidth={500}
		/>
	);
};

export default StoreSettings;
