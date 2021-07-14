import { StackActions } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, Text,TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native'

const Login = ({navigation}) =>{

// const [loading, setLoading] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


    async function handleSubmit() {
    if(!email) return;
    if(!password) return;
    
    // setLoading(true);

    console.log("submit", email, password); 

    try {
        await signIn({
          email: email,
          password: password,
        });

    } catch (error) {
        console.log(error);
        console.log("Usuário ou senha não confere.");
  
      } finally {
        setLoading(false);
      }
    }

    return(

        <KeyboardAvoidingView>
        <View>
            <TouchableOpacity style={styles.loginButton} onPress ={() => {navigation.navigate("Home")}}>          
                <Text style={styles.textoLogin}>
                    LOGIN
                </Text>
            </TouchableOpacity>
            <Text>
                Home
            </Text>

            
            <TextInput
                style={styles.caixa} 
                placeholder="E-mail"  
                onChangeText={(text)=>setEmail(text)}               
                
            />
            <TextInput
                style={styles.caixa}
                secureTextEntry={true}
                placeholder="Senha"  
                onChangeText={(text)=>setPassword(text)}                
                
            />

        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    loginButton:{
        backgroundColor: 'yellow',
        borderRadius: 24,
        width: 300,
        alignSelf: "center"

    },

    textLogin:{
        color: "#0059b3",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        padding: 10 
    },

    caixa:{
        borderBottomWidth:1,
        borderBottomColor:"white",
        marginHorizontal:50
    }
})

export default Login;