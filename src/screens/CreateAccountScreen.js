import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import Header from '../components/Header';

const CreateAccountScreen = ({navigation}) => {
    return <View style={stylez.view}>
        <Header name='Maak een account'/>
        <Spacer>
            <TextInput style={stylez.input}  placeholder='Voornaam' placeholderTextColor='green' />
        </Spacer>
        <TextInput style={stylez.input} placeholder='Acternaam' placeholderTextColor='green' />
        <Spacer>
            <TextInput style={stylez.input} placeholder='Emailadres' placeholderTextColor='green' />
        </Spacer>
        <TextInput style={stylez.input} placeholder='Telefoonnummer' placeholderTextColor='green' />
        <Spacer>
            <TextInput style={stylez.input} placeholder='Wachtwoord' placeholderTextColor='green' />
        </Spacer>
        <TextInput style={stylez.input} placeholder='Herhaal wachtwoord' placeholderTextColor='green' />
        <View style={stylez.wrap}>
            <View style={stylez.bottomButtons}>
                <TouchableOpacity style={stylez.Container} onPress={() => navigation.navigate('Login')}>
                    <Text style={stylez.white}>ANNULEREN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylez.Container}>
                    <Text style={stylez.white}>VOLGENDE</Text>
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