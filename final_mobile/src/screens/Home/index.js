import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native'

const Home = ({navigation}) =>{

    

    return(
        <View>
            <TouchableOpacity style={styles.logOutButton} onPress={() => {navigation.navigate("Login")}}>          
                <Text style={styles.textoLogOut}>
                    LOGOUT
                </Text>
            </TouchableOpacity>
            <Text>
                Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    logOutButton:{
        backgroundColor: 'yellow',
        borderRadius: 24,
        width: 300,
        alignSelf: "center"

    },

    textoLogOut:{
        color: "#0059b3",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        padding: 10 
    }
})

export default Home;