import React, {useState} from 'react';
import { KeyboardAvoidingView, Pressable, View } from 'react-native';
import { StyleSheet, TextInput, Platform} from 'react-native';
import { Feather, SimpleLineIcons,
         MaterialCommunityIcons,
         Ionicons, AntDesign} from '@expo/vector-icons';

const blue = "#3872E9"; 

export default function MessageInput() {

        const [message, setMessage] = useState('')

        function sendMessage() {
                console.warn('sent')
        }
        function onPlusClicked() {}

        function onPress() {
                console.warn("Pressed")
                if(message){
                        sendMessage();
                } else {
                        onPlusClicked();
                }
        }

        return(
                <KeyboardAvoidingView 
                        style={styles.container} 
                        behavior={Platform.OS == 'ios'? "padding" : "height"}
                        keyboardVerticalOffset={100}
                >
                        <View style={ styles.inputContainer}>
                                <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon}/>
                                <TextInput 
                                        style={styles.input}
                                        value={message}
                                        onChangeText={setMessage}
                                        placeholder="Signal message..."
                                />
                                <Feather name="camera" size={24} color="#595959" style={styles.icon} />
                                <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={styles.icon} />
                        </View>
                        <Pressable onPress={onPress} style={styles.butttonContainer}>
                                {message ? <Ionicons name="send-sharp" size={18} color="white" /> : <AntDesign name="plus" size={20} color="white" />}
                        </Pressable>
                </KeyboardAvoidingView>
        );
}
const styles = StyleSheet.create({
        container: {
                flexDirection: 'row',
                padding: 14,
        },
        inputContainer: {
                backgroundColor:"#f2f2f2",
                flex: 1,
                marginRight: 10,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#dedede',
                alignItems: 'center',
                flexDirection: 'row',
                padding: 5,
        },
        icon: {
                marginHorizontal: 5,
        },
        input: {
                flex: 1,
                marginHorizontal: 5,
        },
        butttonContainer: {
                width: 40,
                height: 40,
                backgroundColor:blue,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
        },
        buttonText: {
                color:'white',
                fontSize: 35,
        }
})