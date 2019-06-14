import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Team extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    async componentDidMount() {
        try {
            let response = await fetch(
                'https://facebook.github.io/react-native/movies.json',
            );
            let responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            });
        } catch (error) {
            console.error(error);
        }
    }

    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 8, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 8, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>titre : {item.title},  {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );
    }
}