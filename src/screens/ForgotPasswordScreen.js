import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import { Context as LanguageContext } from '../context/LanguageContext';

const ForgotPasswordScreen = ({navigation}) => {
    const { state } = useContext(LanguageContext)

    const DutchText = 'Uw code word naar uw email gestuurd, met die code kunt u uw wachtwoord veranderen';
    const EnglishText = 'Your code will be sent to your email, with that code you can change your password';

    return <View style={stylez.view}>
        <Header name={state.currentLanguage == 'Nederlands'? 'Wachtwoord vergeten' : 'Password forgoten' }/>
        <View style={stylez.view2}>
            <Spacer>
                <TextInput style={stylez.input} placeholder='email adress' placeholderTextColor='green'/>
            </Spacer>
            <TouchableOpacity style={stylez.Container}>
                <Text style={stylez.white}>{state.currentLanguage == 'Nederlands'? 'Stuur code' : 'Send code' }</Text>
            </TouchableOpacity>
            <Spacer>
                <TouchableOpacity style={stylez.Container} onPress={() => navigation.navigate('Login')}>
                    <Text style={stylez.white}>{state.currentLanguage == 'Nederlands'? 'Ga terug' : 'Return' }</Text>
                </TouchableOpacity>
            </Spacer>
            <View style={stylez.textBorder}>
                <Text style={stylez.green}>{state.currentLanguage == 'Nederlands'? DutchText : EnglishText }</Text>
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