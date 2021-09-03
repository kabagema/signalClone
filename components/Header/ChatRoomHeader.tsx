
import React from 'react';
import { useWindowDimensions, Image, View } from 'react-native';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

         
const ChatRoomHeader = (props) => {

        const { width } = useWindowDimensions();
        return(
          <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: width - 50,
                marginLeft: 5,
                marginRight: 10,
                padding: 5,
                alignItems: "center",
                marginBottom: 10,
              }}>
            <Image 
              source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
              style={{ width: 30, height: 30, borderRadius: 30,}}
            />
            <Text style={{ flex: 1, marginLeft: 10, fontWeight: "bold",}}>{props.children}</Text>
            <Feather name="camera" size={24} color="black" style={{ marginHorizontal: 10 }} />
            <Feather name="edit-2" size={24} color="black" style={{ marginHorizontal: 10 }} />
          </View>
        )
      }

export default ChatRoomHeader;