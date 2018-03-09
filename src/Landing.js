import React from 'react';
import { View, Text, Platform, ImageBackground } from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/landing.jpg')

class Landing extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground style={styles.container}
             source={myBackground}>
                <View style={styles.viewStyle}>
                    <Text
                        style={styles.titleStyle}
                    >Welcome to PokeSearch</Text>
                    <Button
                        block={true}
                        style={styles.buttonStyle}
                        onPress={() =>this.props.switchScreen("search")}
                    >
                        <Text style={styles.buttonText}>Start Searching</Text>
                    </Button>
                </View>
            </ImageBackground>
        </View>
        )
    }
}
const styles = {
    container: {
      flex: 1,
      marginTop: Platform.OS === "android" ? 24 : 0
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleStyle: {
        fontSize: 30,
        color: 'blue',
        alignItems: 'center',
      },
      buttonStyle: {
        margin: 10
      },
      buttonText: {
        color: 'white'
      }
    
}


export default Landing;