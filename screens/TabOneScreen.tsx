import { BUILDER_KEYS, tSTypeAliasDeclaration } from '@babel/types';
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
// import { RootTabScreenProps } from '../types';

export default function TabOneScreen() {
  return (
      <View style={styles.container}>
          <Image  style={styles.image} 
                  source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} />
          <View style={styles.right}>
            <View style={styles.row}>
                <Text style={styles.name}>Random Dev</Text>
                <Text style={styles.text}>2:03 PM</Text>
            </View>
            <Text style={styles.text}>ayyy macanera </Text>
        </View>    
      </View>
    
  );
}

const styles = StyleSheet.create(
  {
    container:{
      flexDirection: 'row',
      padding: 10,
    },
    text: {
      color: "grey",
    },
    name: {
      fontWeight: "bold",
      marginBottom: 3,
      fontSize: 18,
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 30,
      marginRight: 10,
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    right: {
      flex: 1,
      justifyContent: 'center'
    }
  }
)