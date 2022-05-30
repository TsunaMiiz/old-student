import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { addDoc, collection, doc } from "firebase/firestore";
import UserPermissions from '../utilities/UserPermission';

export class RegisterScreen extends Component {
    state = {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        phoneNumber: "",
        errorMessage: null
    };

    handleSignup = async() => {
        try {
            const { email, password, firstname, lastname, phoneNumber } = this.state
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const user = res.user
            addDoc(collection(db, "users"), {
                uid: user.uid,
                firstname,
                lastname,
                phoneNumber,
                email,
            });
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={{ textAlign: "center" }}><h1>สวัสดีครับ</h1></Text> */}

                <View>
                    {this.state.errorMessage && <Text style={StyleSheet.error}>{this.state.errorMessage}</Text>}
                </View><br />

                <View style={{ alignItems: "left", justifyContent: "center" }}>
                    <Text>Firstname :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={firstname => this.setState({ firstname })}
                        value={this.state.firstname} />
                </View><br />

                <View style={{ alignItems: "left", justifyContent: "center" }}>
                    <Text>Lastname :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={lastname => this.setState({ lastname })}
                        value={this.state.lastname} />
                </View><br />

                <View style={{ alignItems: "left", justifyContent: "center" }}>
                    <Text>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={phoneNumber => this.setState({ phoneNumber })}
                        value={this.state.phoneNumberl} />
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

                <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 24 }} >Register</Text>
                </TouchableOpacity><br />

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}
                    style={{ textAlign: "center" }}>
                    <Text>มีบัญชีอยู่แล้ว? <Text style={{ color: '#999', fontWeight: 700 }}>Login</Text></Text>
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

export default RegisterScreen
