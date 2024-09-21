import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import { Button, Card, LogoutModal } from "../../../../Shared/Components";
import Layout from "../../../../Layouts";
import { ImageContainer, Wrapper } from "./Downloads.styles";
import { numberWithCommas } from "../../../../Shared/Utils/helperFunctions";
import { useEffect } from "react";
import useUsers from "../../../../Features/user/userActions";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NoDownload } from "../../../../assets";
import {
	alertSuccess,
	alertError,
} from "../../../../Features/alert/alertSlice";

const Screen = () => {
	const { getMyDownloads, me } = useUsers();
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const nav = useNavigate();
	useEffect(() => {
		const fetchData = async () => {
			await getMyDownloads(me?.id);
		};
		if (!me?.downloads) {
			fetchData();
		}
	}, [me?.id]);

	const downloadFile = async (filename: any) => {
		setLoading(true);
		try {
			const response = await axios.get(
				`https://aluta-market-api.onrender.com/download/${filename}`,
				{
					responseType: "blob", // Specify the response type as blob
				}
			);

			// Create a URL for the blob
			const url = window.URL.createObjectURL(new Blob([response.data]));

			// Check the file type for previewing
			if (response.headers["content-type"].startsWith("image/")) {
				// For images, open a new window/tab for preview
				window.open(url, "_blank");
			} else if (response.headers["content-type"] === "application/pdf") {
				// For PDFs, open a new window/tab for preview
				window.open(url, "_blank");
			} else {
				// Create a link element for download
				const link: any = document.createElement("a");
				link.href = url;
				link.setAttribute("download", filename); // Set the filename for the download

				// Append to the body (not visible)
				document.body.appendChild(link);

				// Trigger the download
				link.click();

				// Clean up and remove the link
				link.parentNode.removeChild(link);
			}

			dispatch(alertSuccess("File downloaded "));
		} catch (e) {
			console.log(e);
			dispatch(alertError("An error occurred"));
		} finally {
			setLoading(false);
		}
	};

	return (
		<Wrapper>
			<div className="flex">
				<h2>Downloads</h2>
			</div>
			<Card className="main" width="100%">
				{me?.downloads?.length > 0 ? (
					me?.downloads.map((download: any, id: number) => (
						<div className="grid" key={id}>
							<div className="first">
								<ImageContainer image={download.thumbnail} />
								<div className="content">
									<h2>{download.name}</h2>
									<div className="price">
										<span>&#8358;{numberWithCommas(download.price)}</span>
										{download.discount > 0 && (
											<span>&#8358;{numberWithCommas(download.discount)}</span>
										)}
									</div>
									<p>#{download.UUID}</p>
									<p style={{ marginTop: "auto" }}>
										{moment(download.created_at).format("dddd DD-MM-YYYY")}
									</p>
								</div>
							</div>
							<div className="second">
								<Button
									background="#0D6EFD"
									color="white"
									loading={loading}
									disabled={loading}
									onClick={() => downloadFile(download.file)}
								>
									Download
								</Button>
							</div>
						</div>
					))
				) : (
					<div className="center-container">
						<div className="icon">
							<NoDownload />
						</div>
						<div className="text">
							<p className="header">No Downloads</p>
							<p className="info">You have no downloaded items</p>
							<Button
								width="100%"
								background="#0D6EFD"
								color="#fff"
								onClick={() => nav("/")}
							>
								Go to Market
							</Button>
						</div>
					</div>
				)}
			</Card>
		</Wrapper>
	);
};

const DownloadPage = () => {
	const activeModal = useSelector(selectActiveModal);
	const { me } = useUsers();

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={!me}
			showModal={activeModal}
			popUpContent={<LogoutModal />}
			navMode="noSearch"
		/>
	);
};

export default DownloadPage;
