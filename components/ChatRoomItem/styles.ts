import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
        {
          container:{
            flexDirection: 'row',
            padding: 10,
          },
          image: {
            height: 50,
            width: 50,
            borderRadius: 30,
            marginRight: 10,
          },
          badgeContainer: {
            backgroundColor: "#3872E9",
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            left: 45,
            top: 10,  
          },
          badgeText: {
            color: "white",
            fontSize: 12,
          },
          text: {
            color: "grey",
          },
          name: {
            fontWeight: "bold",
            marginBottom: 3,
            fontSize: 18,
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

export default styles;