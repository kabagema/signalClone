import { BUILDER_KEYS, tSTypeAliasDeclaration } from '@babel/types';
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import ChatRoomItem from '../components/ChatRoomItem';

import chatRoomData from '../assets/dummy-data/ChatRooms';

const chatRoom1 = chatRoomData[0];
const chatRoom2 = chatRoomData[1];

export default function TabOneScreen() {

  return (
      <View style={styles.page}>
      <ChatRoomItem  chatRoom={chatRoom1}/>
      <ChatRoomItem  chatRoom={chatRoom2}/>
      </View>
  );
}

const styles = StyleSheet.create(
  {
    page: {
      backgroundColor: "white",
    },
    
  }
)