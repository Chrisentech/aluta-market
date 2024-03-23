import React, { useState } from "react";
import Layout from "../../../../Layouts";
import {
	Wrapper,
	Sidebar,
	Main,
	MessageHeader,
	MessageBody,
} from "./MessagingStyles";
import {
	PictureUpload,
	SendArrow,
	noMessage,
	userPic,
} from "../../../../assets";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Screen: React.FC = () => {
	const [chatLists, setChatList] = useState([
		"Foa",
		"Foa",
		"Foa",
		"Foa",
		"Foa",
		"Foa",
		"Foa",
		"Foa",
		"Foa",
		"Foa",
		"Foa",
		"Foa",
	]);
	const [messages, setMessages] = useState(["Foa", "Foa", "Foa", "Foa"]);
	// const audioRef: any = useRef<HTMLAudioElement>(null);
	const [isLoading, setLoading] = useState(false);
	console.log(setMessages, setLoading, setChatList);
	return (
		<Wrapper>
			<Sidebar>
				<h2>Messages</h2>
				{chatLists.length > 0 ? (
					<div className="list_container">
						{chatLists.map((_, index: number) => (
							<div className="child" key={index}>
								<img src={userPic} alt="..." />
								<div className="indicator"></div>
								<section>
									<div className="header">
										<h1>Aluta Collections</h1>
										<span>
											<p className="text-container">
												Please Take a look at the images and tell me what you
												feel about it
											</p>
										</span>
									</div>
								</section>
								<div className="left">
									<p>06:12pm</p>
									<p className="badge">5</p>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="no_chat_list">No Message</div>
				)}
			</Sidebar>
			<Main>
				{messages.length > 0 ? (
					<>
						<MessageHeader>
							<img src={userPic} alt="" />
							<h1>Aluta Solutions</h1>
						</MessageHeader>
						<MessageBody>
							<form>
								<input type="text" placeholder="Type your message here" />
								<img src={PictureUpload} className="picture" alt="" />
								{isLoading ? (
									<h1>...</h1>
								) : (
									<img className="send" src={SendArrow} />
								)}
							</form>
							<div className="content">
								{/* <audio ref={audioRef} src={sound} className="hidden" /> */}
								<aside>
									<div style={{ display: "flex", gap: 10 }}>
										<div style={{ marginTop: -10 }}>
											<div className={`other`}>Hi there, How are you?</div>
											<p style={{ marginTop: 8 }}>12:24 pm</p>
										</div>
									</div>
									<div style={{ display: "flex", gap: 10 }}>
										<div style={{ marginTop: -10 }}>
											<div className={`other`}>
												Waiting for your reply. As I have to go back soon. I
												have to travel long distance.
											</div>
											<p style={{ marginTop: 8 }}>12:24 pm</p>
										</div>
									</div>
									<div
										style={{
											marginTop: -10,
											width: "100%",
											marginLeft: "auto",
										}}
									>
										<div className={`self`}>
											Hi, I am coming there in few minutes. Please wait!! I am
											in taxi right now.
										</div>

										<p
											style={{
												marginTop: 8,
												float: "inline-end",
												marginRight: 23,
											}}
										>
											12:24 pm
										</p>
										<IoCheckmarkDoneOutline
											color="green"
											style={{
												marginTop: 8,
												float: "inline-end",
												marginLeft: 5,
											}}
										/>
									</div>
									<div style={{ display: "flex", gap: 10 }}>
										<div style={{ marginTop: -10 }}>
											<div className={`other`}>
												Thank you very much, I am waiting here at StarBuck cafe.
											</div>
											<p style={{ marginTop: 8 }}>12:24 pm</p>
										</div>
									</div>
									<div style={{ display: "flex", gap: 10 }}>
										<div style={{ marginTop: -10 }}>
											<div className={`other`}>Hi there, How are you?</div>
											<p style={{ marginTop: 8 }}>12:24 pm</p>
										</div>
									</div>
									<div style={{ display: "flex", gap: 10 }}>
										<div style={{ marginTop: -10 }}>
											<div className={`other`}>
												Waiting for your reply. As I have to go back soon. I
												have to travel long distance.
											</div>
											<p style={{ marginTop: 8 }}>12:24 pm</p>
										</div>
									</div>
									<div
										style={{
											marginTop: -10,
											width: "100%",
											marginLeft: "auto",
										}}
									>
										<div className={`self`}>
											Hi, I am coming there in few minutes. Please wait!! I am
											in taxi right now.
										</div>

										<p
											style={{
												marginTop: 8,
												float: "inline-end",
												marginRight: 23,
											}}
										>
											12:24 pm
										</p>
										<IoCheckmarkDoneOutline
											color="green"
											style={{
												marginTop: 8,
												float: "inline-end",
												marginLeft: 5,
											}}
										/>
									</div>
									<div style={{ display: "flex", gap: 10 }}>
										<div style={{ marginTop: -10 }}>
											<div className={`other`}>
												Thank you very much, I am waiting here at StarBuck cafe.
											</div>
											<p style={{ marginTop: 8 }}>12:24 pm</p>
										</div>
									</div>
									<div style={{ display: "flex", gap: 10 }}>
										<div style={{ marginTop: -10 }}>
											<div className={`other`}>Hi there, How are you?</div>
											<p style={{ marginTop: 8 }}>12:24 pm</p>
										</div>
									</div>
									<div className="option">
										<span className="line"></span>
										<p>Today</p>
										<span className="line"></span>
									</div>
									<div style={{ display: "flex", gap: 10 }}>
										<div style={{ marginTop: -10 }}>
											<div className={`other`}>
												Waiting for your reply. As I have to go back soon. I
												have to travel long distance.
											</div>
											<p style={{ marginTop: 8 }}>12:24 pm</p>
										</div>
									</div>
									<div
										style={{
											marginTop: -10,
											width: "100%",
											marginLeft: "auto",
										}}
									>
										<div className={`self`}>
											Hi, I am coming there in few minutes. Please wait!! I am
											in taxi right now.
										</div>

										<p
											style={{
												marginTop: 8,
												float: "inline-end",
												marginRight: 23,
											}}
										>
											12:24 pm
										</p>
										<IoCheckmarkDoneOutline
											color="green"
											style={{
												marginTop: 8,
												float: "inline-end",
												marginLeft: 5,
											}}
										/>
									</div>
									<div style={{ display: "flex", gap: 10 }}>
										<div style={{ marginTop: -10 }}>
											<div className={`other`}>
												Thank you very much, I am waiting here at StarBuck cafe.
											</div>
											<p style={{ marginTop: 8 }}>12:24 pm</p>
										</div>
									</div>
								</aside>
							</div>
						</MessageBody>
					</>
				) : (
					<div className="no_message">
						<img src={noMessage} alt="" />{" "}
					</div>
				)}
			</Main>
		</Wrapper>
	);
};

const Messaging = () => {
	// const { loading } = useSelector((store: any) => store.products);
	return (
		<Layout
			layout={"blank"}
			component={Screen}
			isLoading={false}
			navMode="noSearch"
		/>
	);
};

export default Messaging;
