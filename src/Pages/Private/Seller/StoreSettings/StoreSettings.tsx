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
import { Button, Card } from "../../../../Shared/Components";
import { useDispatch, useSelector } from "react-redux";
import {
	selectActiveModal,
	showModal,
} from "../../../../Features/modal/modalSlice";
import ModalContent from "./modals";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import useStore from "../../../../Features/store/storeAction";
import { selectStore } from "../../../../Features/store/storeSlice";
import { alertError } from "../../../../Features/alert/alertSlice";

const Screen: React.FC = () => {
	const dispatch = useDispatch();
	const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);
	const { maintenanceMode, setMaintenanceMode } = useStore();
	const store = useSelector(selectStore);
	const thumbnailInputRef = useRef<HTMLInputElement>(null);
	const profileImgInputRef = useRef<HTMLInputElement>(null);
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
	const [loading, setLoading] = useState<boolean>(false);
	const handleThumbnailChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setThumbnail(reader.result);
			};
			reader.readAsDataURL(file);
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

	const handleProfileImgChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfileImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};
	useEffect(() => {
		console.log(maintenanceMode);
	}, [maintenanceMode]);

	const saveChnageBtnDisabled =
		description?.trim() === store?.description &&
		phone?.trim() === store?.phone &&
		address?.trim() === store?.address &&
		email?.trim() === store?.email;

	const handleSubmit = () => {
		setLoading(true);
		if (typeof phone !== "string") {
			dispatch(alertError("Phone number must be a string"));
			setLoading(false);
			return;
		}
		if (phone.trim() === "") {
			dispatch(alertError("Phone number cannot be empty"));
			setLoading(false);
			return;
		}
		if (email.trim() === "") {
			dispatch(alertError("Email cannot be empty"));
			setLoading(false);
			return;
		}
		if (description.trim() === "") {
			dispatch(alertError("Description cannot be empty"));
			setLoading(false);
			return;
		}
		if (address.trim() === "") {
			dispatch(alertError("Address cannot be empty"));
			setLoading(false);
			return;
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
								alt=".."
								onClick={() => thumbnailInputRef.current?.click()}
								style={{ position: "absolute", right: 0, cursor: "pointer" }}
							/>

							<input
								type="file"
								accept="image/png, image/jpg"
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
									accept="image/png, image/jpg"
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
									{maintenanceMode ? (
										<MdToggleOn
											size="55px"
											color="rgb(255 21 18 / 91%)"
											onClick={() => setMaintenanceMode(false)}
										/>
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
							disabled={saveChnageBtnDisabled}
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

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={!store}
			showModal={activeModal}
			popUpContent={<ModalContent active={activeModal} />}
			navMode="noSearch"
			modalWidth={500}
		/>
	);
};

export default StoreSettings;
