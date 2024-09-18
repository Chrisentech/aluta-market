import { gql } from "@apollo/client";

const MESSAGE_FIELDS = gql`
	fragment MessageFields on Message {
		id
		chat_id
		content
		users{
			id
			avatar
			name
			online
		}
		media
		is_read
	}
`;

const CHAT_FIELDS = gql`
	fragment ChatFields on Chat {
		id
		latest_message{
			id
			chat_id
			content
		created_at
			sender
			users{
				id
				avatar
				name
				online
			}
			media
			is_read
		}
		messages{
			id
			sender
		chat_id
		content
		created_at
		updated_at
		users{
			id
			avatar
			name
			online
		}
		media
		is_read
		}
		unread_count
	}
`;


export const CREATE_CHATLIST = gql`
	mutation CreateChat($input:  ChatInput!) {
		createChat(input: $input) {
			users{
				id
				name
			}
		}
	}
`;

export const MY_CHATS = gql`
	${CHAT_FIELDS}
	query Chats($userID: String!) {
		Chats(userID: $userID) {
			...ChatFields
		}
	}
`;


export const SEND_MESSAGE = gql`
	${MESSAGE_FIELDS}
	mutation sendMessage($input: MessageInput!) {
		sendMessage(input: $input) {
			...MessageFields
		}
	}
`;

export const MY_MESSAGES = gql`
	${MESSAGE_FIELDS}
	query Messages($chatId: Int!) {
		Messages(chatId: $chatId) {
			...MessageFields
		}
	}
`;