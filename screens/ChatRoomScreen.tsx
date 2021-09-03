import * as React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import Message from "../components/Message/Message";
import { StyleSheet } from "react-native";
import ChatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";

const styles = StyleSheet.create({
	page: {
		backgroundColor: "white",
		flex: 1,
	},
});
export default function ChatRoomScreen() {
	const navigation = useNavigation();
	navigation.setOptions({ title: "Elong Musk" });
	const route = useRoute();

	console.warn(route.params?.id);
	return (
		<SafeAreaView style={styles.page}>
			<FlatList
				data={ChatRoomData.messages}
				renderItem={({ item }) => (
					<Message message={item} />
				)}
				inverted
			/>
			<MessageInput />
		</SafeAreaView>
	);
}

