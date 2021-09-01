import * as React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

export default function ChatRoomItem() {
        return(
                <View style={styles.container}>
                        <Image  style={styles.image} 
                                source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} />
                        <View style={styles.badgeContainer}><Text style={styles.badgeText}>5</Text></View>
                        <View style={styles.right}>
                        <View style={styles.row}>
                                <Text style={styles.name}>Random Dev</Text>
                                <Text style={styles.text}>2:03 PM</Text>
                        </View>
                        <Text numberOfLines={1} style={styles.text}>ayyy macanera ayyy macanera ayyy macaneraayyy macanera ayyy macanera</Text>
                        </View>    
                </View>
        );
}

