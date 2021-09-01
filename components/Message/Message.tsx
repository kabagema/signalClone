import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const blue = "#3872E9";
const lightGrey = "lightgrey";
const Message = () => {

        const isMe = true;
        
        return(
                <View style={[styles.container, 
                        {backgroundColor: isMe ? lightGrey : blue,
                         marginLeft: isMe ? 'auto' : 10
                        }
                        ]}>
                        <Text style={[styles.text, {color: isMe ? 'black' : 'white'}]}>Message</Text>
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                backgroundColor: "#3872E9",
                padding: 10,
                margin: 10,
                borderRadius: 10,
                maxWidth: "75%"
        },
        text: {},
});

export default Message;