import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import Header from '../components/Header';
import { Context as LanguageContext } from '../context/LanguageContext';

const CreateAccountScreen = ({navigation}) => {
    const { state } = useContext(LanguageContext);
    //{state.currentLanguage == 'Nederlands'?  : }

    return <View style={stylez.view}>
        <Header name={state.currentLanguage == 'Nederlands'? 'Maak een account' : 'Make a account' }/>
        <Spacer>
            <TextInput style={stylez.input}  placeholder={state.currentLanguage == 'Nederlands'? 'Voornaam' : 'First name' } placeholderTextColor='green' />
        </Spacer>
        <TextInput style={stylez.input} placeholder={state.currentLanguage == 'Nederlands'? 'Acternaam' : 'Last name' } placeholderTextColor='green' />
        <Spacer>
            <TextInput style={stylez.input} placeholder='Emailadres' placeholderTextColor='green' />
        </Spacer>
        <TextInput style={stylez.input} placeholder={state.currentLanguage == 'Nederlands'? 'Telefoonnummer' : 'Phone number' } placeholderTextColor='green' />
        <Spacer>
            <TextInput style={stylez.input} placeholder={state.currentLanguage == 'Nederlands'? 'Wachtwoord' : 'Password' } placeholderTextColor='green' />
        </Spacer>
        <TextInput style={stylez.input} placeholder={state.currentLanguage == 'Nederlands'? 'Herhaal wachtwoord' : 'Repeat password' } placeholderTextColor='green' />
        <View style={stylez.wrap}>
            <View style={stylez.bottomButtons}>
                <TouchableOpacity style={stylez.Container} onPress={() => navigation.navigate('Login')}>
                    <Text style={stylez.white}>{state.currentLanguage == 'Nederlands'? 'ANNULEREN' : 'CANCEL' }</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylez.Container}>
                    <Text style={stylez.white}>{state.currentLanguage == 'Nederlands'? 'VOLGENDE' : 'NEXT' }</Text>
                </TouchableOpacity>
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
    white:{
        color: 'white'
    },
    input:{
        height: 50,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 7
    },
    wrap:{
        position: 'absolute',
        bottom: 0
    },
    bottomButtons:{
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        padding: 10,
        margin: 5
    },
    Container:{
        backgroundColor: 'darkgreen',
        padding:15,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
        margin: 5
    }
});

export default CreateAccountScreen;