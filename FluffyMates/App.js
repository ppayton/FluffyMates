import React from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    Image,
} from 'react-native';
import Root from './src/config/Router';
import Loading from './src/screens/Loading';
import LoadScreen from './src/screens/LoadScreen';
import Amplify, { AUTH } from 'aws-amplify';
import AWSConfig from './aws-exports';
import filters from './global';
console.disableYellowBox = true;

export default class App extends React.Component {
    state = {
        loaded: false
    }
    constructor() {
        super();
        filters.species = "C";
        filters.index = 0;
        console.log(`Species: ${filters.species }`)
        Loading.load(v => this.setState({loaded: true}));
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.loaded ? <Root/> : <LoadScreen />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
