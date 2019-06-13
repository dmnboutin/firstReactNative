import React from 'react'
import {Button, StyleSheet, View} from 'react-native'
import {Navigation} from 'react-native-navigation';

export default class Menu extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => {
                        Navigation.push('App', {
                            component: {
                                name: 'Screen2',
                            }
                        });
                    }}
                    title="View next screen"
                />
                <Button
                    onPress={() => {
                        Navigation.push('App', {
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
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 14
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    }
})