// Home.js
import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import { goToAuth } from './navigation'
import {Navigation} from 'react-native-navigation';

import { USER_KEY } from './config'
import {navigationPush, openMenu} from './common';

export default class Home extends React.Component {
    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Home'
                },
                rightButtons: [
                    {
                        icon: require('./assets/menu.png'),
                        id: 'openMenu',
                    },
                ]
            }
        };
    }

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem(USER_KEY)
            goToAuth()
        } catch (err) {
            console.log('error signing out...: ', err)
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello from Home screen.</Text>
                <Button
                    onPress={this.logout}
                    title="Sign Out"
                />
                <Button
                    onPress={() => {
                        navigationPush('Screen2');
                    }}
                    title="View next screen"
                />
            </View>
        )
    }

    navigationButtonPressed({ buttonId }) {
        openMenu();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})