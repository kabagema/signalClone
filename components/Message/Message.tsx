import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const blue = "#3872E9";
const lightGrey = "lightgrey";

const myID = 'u1';

const Message = ({ message }) => {

        const isMe = message.user.id == myID;

        
        return(
                <View style={[
                                styles.container, 
                                isMe ? styles.rightContainer : styles.leftContainer,
                        ]}>
                        <Text style={[styles.text, {color: isMe ? 'black' : 'white'}]}>{message.content}</Text>
                </View>
        )
};

const styles = StyleSheet.create({
        container: {
                backgroundColor: "#3872E9",
                padding: 10,
                margin: 10,
                borderRadius: 10,
                maxWidth: "75%"
        },
        leftContainer: {
                backgroundColor: blue,
                marginLeft: 10,
                marginRight: 'auto',
        },
        rightContainer: {
                backgroundColor: lightGrey,
                marginLeft: "auto",
                marginRight: 10,
        },
        text: {},
});

export default Message;
