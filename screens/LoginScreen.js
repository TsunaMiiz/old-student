import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase-config";

export class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    render() {
        return (
            <View style={styles.container}>

                <View>
                    {this.state.errorMessage && <Text style={StyleSheet.error}>{this.state.errorMessage}</Text>}
                </View><br />

                <View style={{ alignItems: "left", justifyContent: "center" }}>
                    <Text>Email :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} />
                </View><br />

                <View style={{ alignItems: "left", justifyContent: "center" }}>
                    <Text>Password :</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password} />
                </View><br /><br /><br />

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 24 }} >Login</Text>
                </TouchableOpacity><br />

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}
                    style={{ textAlign: "center" }}>
                    <Text>ยังไม่มีบัญชี? <Text style={{ color: '#999', fontWeight: 700 }}>Singup</Text></Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50,
    },
    error: {
        color: "#E9446A",
        textAlign: "center",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 50,
        backgroundColor: "#3260a8",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    }
})

export default LoginScreen
