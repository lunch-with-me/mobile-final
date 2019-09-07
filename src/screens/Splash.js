import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Splash extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')}>
                    <Text>Splash</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Splash;