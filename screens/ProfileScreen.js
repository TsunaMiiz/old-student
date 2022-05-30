import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth, db } from '../firebase-config'
import { setDoc, getDocs, collection, doc, query, where, onSnapshot, updateDoc, getDoc } from "firebase/firestore";

export class ProfileScreen extends Component {

    useEffect = () => {
        try {
            const user = auth.currentUser
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const getUser = async () => {
                const data = await getDocs(q);
                setProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            }
            getUser();
        } catch (error) {
            console.log(error.message);
        }
    }

    signOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    UpdateUserInfo = async()=>{
        const querySnapshot = await getDocs(q);
        let docID = '';
        querySnapshot.forEach((doc) => {
        // if email is you primary key then only document will be fetched so it is safe to continue, this line will get the documentID of user so that we can update it
          docID = doc.id;
        });
        const user = doc(db, "users", docID);
    
        // Set the "capital" field of the city 'DC'
        await updateDoc(user, {
            firstname: firstname,
            lastname: lastname,
            phoneNumber: phoneNumber,
        });
    }

render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h}> <h1>PROFILE</h1> </Text>
            </View>
            <View></View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={this.signOutUser} >
                    <Text style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 24 }}><>Logout</></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
}

export default ProfileScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50,
    },
    h: {
        blackgroundColor: "#E9446A",
        color: "#3260a8",
        textAlign: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    footer: {
        position: 'absolute',
        flex: 1,
        bottom: -10,
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        flex: 1,
        backgroundColor: "#3260a8",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    }
})