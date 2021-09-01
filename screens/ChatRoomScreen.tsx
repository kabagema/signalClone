import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import Message from '../components/Message/Message';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        page: {
                backgroundColor: 'white',
                flex: 1,
        }
});
export default function ChatRoomScreen() {
        return(
                <View style={styles.page} >
                        <Message />
                </View>
        );
};