import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import Message from '../components/Message/Message';
import { StyleSheet } from 'react-native';
import ChatRoomData from "../assets/dummy-data/Chats"
import MessageInput from '../components/MessageInput';

const styles = StyleSheet.create({
        page: {
                backgroundColor: 'white',
                flex: 1,
        }
});
export default function ChatRoomScreen() {
        return(
                <View style={styles.page} >
                <FlatList
                data={ChatRoomData.messages}
                renderItem={({item}) => <Message message = {item} />}
                inverted
                />
                <MessageInput />
                </View>
        );
};