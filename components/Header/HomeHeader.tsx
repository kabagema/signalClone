
import React, {useState} from 'react';
import { useWindowDimensions, Image, View } from 'react-native';
import { Text } from 'react-native';
import { Feather, SimpleLineIcons,
         MaterialCommunityIcons,
         Ionicons, AntDesign} from '@expo/vector-icons';

         
const HomeHeader = (props) => {

        const { width } = useWindowDimensions();
        return(
          <View style={{ 
              flexDirection: 'row',
              justifyContent: 'space-between',
              width,
              padding: 10,
              alignItems: 'center'}}>
            <Image 
              source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
              style={{ width: 30, height: 30, borderRadius: 30}}
            />
      
            <Text style={{flex: 1, textAlign: 'center', marginLeft: 48, fontWeight: 'bold'}}>Signal</Text>
            <Feather name="camera" size={24} color="black" style={{marginHorizontal : 5}}/>
            <Feather name="edit-2" size={24} color="black" style={{marginHorizontal : 5}} />
          </View>
        )
      }

export default HomeHeader;