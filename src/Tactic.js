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

export default class Tactic extends React.Component {
    static get options() {
        return {
            bottomTabs: {
                id: 'BottomTabsId',
                children: [
                    {
                        component: {
                            name: 'SignIn',
                            options: {
                                bottomTab: {
                                    fontSize: 12,
                                    text: 'Sign In',
                                    icon: require('./assets/signin.png')
                                }
                            }
                        },
                    },
                    {
                        component: {
                            name: 'SignUp',
                            options: {
                                bottomTab: {
                                    text: 'Sign Up',
                                    fontSize: 12,
                                    icon: require('./assets/signup.png')
                                }
                            }
                        },
                    }
                ],
            }
        };
    }
    logout = async () => {
        try {
            await AsyncStorage.removeItem(USER_KEY)
            goToAuth()
        } catch (err) {
            console.log('error signing out...: ', err)
        }
    }
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
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Screen2',
                            }
                        });
                    }}
                    title="View next screen"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})