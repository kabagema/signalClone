import { BUILDER_KEYS, tSTypeAliasDeclaration } from '@babel/types';
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import ChatRoomItem from '../components/ChatRoomItem';
export default function TabOneScreen() {
  return (
      <View style={styles.page}>
      <ChatRoomItem />
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