import * as React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { Pressable } from 'react-native';

export default function ChatRoomItem({ chatRoom }) {
        const user = chatRoom.users[1];

        const navigation = useNavigation();

        const onPress = () => {
                navigation.navigate('ChatRoom', { id: chatRoom.id });
        }

        return(
                <Pressable onPress={onPress} style={styles.container}>
                        <Image  style={styles.image} 
                                source={{uri: user.imageUri}} />

                        {chatRoom.newMessages ? <View style={styles.badgeContainer}><Text style={styles.badgeText}>{chatRoom.newMessages}</Text></View> : null}

                        <View style={styles.right}>
                        <View style={styles.row}>
                                <Text style={styles.name}>{user.name}</Text>
                                <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                        </View>
                        <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
                        </View>    
                </Pressable>
        );
}

// https://youtu.be/_eFad7AGWdM?t=12911

