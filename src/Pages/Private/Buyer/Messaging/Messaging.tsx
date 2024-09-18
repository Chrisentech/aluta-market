import React, { useEffect, useRef, useState } from "react";
import Layout from "../../../../Layouts";
import {
	Wrapper,
	Sidebar,
	Main,
	MessageHeader,
	MessageBody,
} from "./MessagingStyles";
import { PictureUpload, SendArrow, noMessage } from "../../../../assets";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
// import { ws } from "../../../../Services/graphql/apolloClient";
import useUsers from "../../../../Features/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import {
	actions,
	fetchMe,
	selectMyChats,
} from "../../../../Features/user/userSlice";
import { truncate } from "lodash";
import { Puff } from "react-loading-icons";
import moment from "moment";
import { formatMessageDate } from "../../../../Shared/Utils/helperFunctions";
import { token } from "../../../../Services/graphql/apolloClient";
import { Button } from "../../../../Shared/Components";

const Screen: React.FC = () => {
	const { sendMessage, getChats } = useUsers();
	const chats = useSelector(selectMyChats) ?? [];
	const me = useSelector(fetchMe);
	const [chatLists, setChatList] = useState(chats);
	const [selectedChat, setSelectedChat] = useState<any>({});
	const [messages, setMessages] = useState<any>([]);
	const [content, setContent] = useState("");
	// const audioRef: any = useRef<HTMLAudioElement>(null);
	const messageEndRef = useRef<HTMLDivElement | null>(null); // Ref for the end of the message container
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(false);
	const [clicked, setClicked] = useState(false);

	const Friend = (arr: any, userid: any) => {
		return arr?.find((item: any) => item.id != userid);
	};
	// console.log(ws);

	useEffect(() => {
		const createWebSocket = () => {
			const ws = new WebSocket("ws://localhost:8082/ws?token=" + token);

			ws.onopen = () => {
				console.log("WebSocket connection established");
			};

			ws.onmessage = (event) => {
				const message = JSON.parse(event.data);
				setMessages((prevMessages: any) => [...prevMessages, message]);
			};

			ws.onclose = () => {
				console.log("WebSocket connection closed, attempting to reconnect...");
				setTimeout(createWebSocket, 5000); // Reconnect after 5 seconds
			};

			ws.onerror = (error) => {
				console.error("WebSocket error:", error);
			};

			return ws;
		};

		const ws = createWebSocket();

		return () => {
			ws.close();
		};
	}, []);
	const handleSelectedChat = (chat: any) => {
		if (!isLoading) {
			setSelectedChat(chat);
			setMessages(chat?.messages);
			setClicked(true);
			setTimeout(() => {
				setClicked(false);
			}, 1000);
		}
	};
	useEffect(() => {
		// Check if there are any messages
		if (!messages || messages.length === 0) return;

		// Find the chat whose id matches the selected message's chat_id
		const isChat = chats?.payload?.find(
			(chat: any) => chat.id === messages[0].chat_id
		);

		// Ensure that isChat is not undefined
		if (!isChat) return;

		// Create a new chat object with updated latest_message content (immutable change)
		const updatedChat = {
			...isChat,
			latest_message: {
				...isChat.latest_message,
				content: messages[messages.length - 1].content,
			},
			messages,
		};

		// Filter out the old chat and prepend the updated chat to the list
		const updatedChatList = chatLists.filter(
			(chatList: any) => chatList.id !== isChat.id
		);

		// Update the state with the new chat list
		if (!clicked) {
			setChatList([updatedChat, ...updatedChatList]);
		}
		dispatch(actions.setChats([updatedChat, ...updatedChatList]));
	}, [messages, isLoading]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response: any = await getChats(me?.id.toString() || "");

				setChatList(response);
				setSelectedChat(response[0]);
				setMessages(response[0]?.messages);
			} catch (error) {
				console.error("Error fetching chats:", error);
			} finally {
				// console.log(selectedChat);
			}
		};
		fetchData();
	}, [me]);

	useEffect(() => {
		// Scroll to the bottom whenever messages change
		if (messageEndRef.current) {
			messageEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	const handleSubmit: any = async (event: React.FormEvent) => {
		if (content) {
			event.preventDefault();
			setLoading(true);
			try {
				const payload = {
					chat_id: selectedChat.id,
					content,
					sender: me?.id,
					is_read: false,
				};
				console.log("Sending message with payload:", payload);
				await sendMessage(payload);
				setContent(""); // Clear the input after sending
			} catch (error) {
				console.error("Error in handleSubmit:", error);
			} finally {
				setLoading(false);
			}
		}
	};
	return (
		<Wrapper>
			<Sidebar>
				<h2>Messages</h2>
				{chatLists?.length > 0 ? (
					<div className="list_container">
						{chatLists?.map((chat: any, index: number) => (
							<div
								className="child"
								key={index}
								onClick={() => handleSelectedChat(chat)}
							>
								<img
									src={Friend(chat?.latest_message?.users, me?.id)?.avatar}
									alt="..."
								/>
								<div
									className="indicator"
									style={{
										background: Friend(chat?.latest_message?.users, me?.id)
											?.online
											? "green"
											: "gray",
									}}
								></div>
								<section>
									<div className="header">
										<h1>
											{truncate(
												Friend(chat?.latest_message?.users, me?.id)?.name,
												{
													length: 20, // Maximum length of the truncated string
													omission: "...", // String to indicate truncation (defaults to '...')
												}
											)}
										</h1>
										<span>
											<p className="text-container">
												{chat?.latest_message?.content}
											</p>
										</span>
									</div>
								</section>
								{chat?.unread_count > 0 && (
									<div className="left">
										<p>
											{moment(chat?.latest_message?.created_at).format(
												"h:mm a"
											)}
										</p>
										<p className="badge">{chat?.unread_count}</p>
									</div>
								)}
							</div>
						))}
					</div>
				) : (
					<div className="no_chat_list">No Chats</div>
				)}
			</Sidebar>
			<Main>
				{messages?.length > 0 ? (
					<>
						<MessageHeader style={{ marginBottom: 30 }}>
							<img
								src={
									Friend(selectedChat?.latest_message?.users, me?.id)?.avatar
								}
								alt=""
							/>
							<h1 style={{ marginBottom: 10 }}>
								{Friend(selectedChat?.latest_message?.users, me?.id)?.name}
							</h1>
						</MessageHeader>
						<MessageBody>
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									placeholder="Type your message here"
									value={content}
									required
									onChange={(e: any) => setContent(e.target.value)}
								/>
								<img
									src={PictureUpload}
									className="picture"
									alt="Upload Picture"
								/>

								<Button
									className="send"
									disabled={isLoading}
									width="70px"
									loading={isLoading}
								>
									{!isLoading && (
										<img
											src={SendArrow}
											alt="Send Message"
											onClick={handleSubmit}
										/>
									)}
								</Button>
							</form>
							<div className="content">
								<aside>
									{messages?.map((message: any, i: number) => {
										// Check if the message is from the account owner
										const isOwner = message?.sender == me?.id;

										// Determine whether to show a date header
										const showDateHeader =
											i === 0 || // Always show a date header for the first message
											!moment(messages[i - 1]?.created_at).isSame(
												message?.created_at,
												"day"
											);

										return (
											<React.Fragment key={i}>
												{showDateHeader && (
													<div className="option">
														<span className="line"></span>
														<p>{formatMessageDate(message?.created_at)}</p>
														<span className="line"></span>
													</div>
												)}

												{/* Ternary condition for message display */}
												{isOwner ? (
													// Owner's message on the right side
													<div
														style={{
															marginBottom: 36,
															width: "100%",
															marginLeft: "auto",
														}}
													>
														<div className="self">{message?.content}</div>
														<p
															style={{
																marginTop: 8,
																float: "inline-end",
																marginRight: 23,
															}}
														>
															{moment(message?.created_at).format("h:mm a")}
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
												) : (
													// Others' messages on the left side
													<div style={{ display: "flex", gap: 10 }}>
														<div style={{ marginTop: -10 }}>
															<div className="other">{message?.content}</div>
															<p style={{ marginTop: 8 }}>
																{" "}
																{moment(message?.created_at).format("h:mm a")}
															</p>
														</div>
													</div>
												)}
											</React.Fragment>
										);
									})}
									<span ref={messageEndRef} />
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
	const chats = useSelector(selectMyChats);

	return (
		<Layout
			layout={"blank"}
			component={Screen}
			isLoading={!chats}
			navMode="noSearch"
		/>
	);
};

export default Messaging;
