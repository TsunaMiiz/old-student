import React, { Component } from 'react'
import {ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default class LoadingScreen extends Component {
    componentDidMount() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Loading... </Text>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
