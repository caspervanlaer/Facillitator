import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Spacer from '../components/Spacer';

const ForgotPasswordScreen = ({navigation}) => {
    return <View style={stylez.view}>
        <Header name='Wachtwoord vergeten'/>
        <View style={stylez.view2}>
            <Spacer>
                <TextInput style={stylez.input} placeholder='email adress' placeholderTextColor='green'/>
            </Spacer>
            <TouchableOpacity style={stylez.Container}>
                <Text style={stylez.white}>Stuur code</Text>
            </TouchableOpacity>
            <Spacer>
                <TouchableOpacity style={stylez.Container} onPress={() => navigation.navigate('Login')}>
                    <Text style={stylez.white}>Ga terug</Text>
                </TouchableOpacity>
            </Spacer>
            <View style={stylez.textBorder}>
                <Text style={stylez.green}>Uw code word naar uw email gestuurd, met die code kunt u uw wachtwoord veranderen</Text>
            </View>
        </View>
    </View>
};

const stylez = StyleSheet.create({
    view:{
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
    },
    view2:{
        height: '50%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input:{
        height: 50,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 7
    },
    Container:{
        backgroundColor: 'darkgreen',
        padding:15,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
        margin: 5
    },
    white:{
        color: 'white'
    },
    textBorder:{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        padding: 8
    },
    green:{
        color: 'darkgreen'
    }
});

export default ForgotPasswordScreen;