import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import Header from '../components/Header';
import { Context as LanguageContext } from '../context/LanguageContext';

const SettingsScreen = ({navigation}) => {
    const { state } = useContext(LanguageContext);

    return <View style={stylez.view}>
        <Header name='Settings'/>
        <View style={stylez.view2}>
            <Spacer />
            <TouchableOpacity style={stylez.button} onPress={() => navigation.navigate('Main')}>
                <Text style={stylez.text}>{state.currentLanguage == 'Nederlands'? 'Mijn account' : 'My account'}</Text>
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity style={stylez.button} onPress={() => navigation.navigate('Main')}>
                <Text style={stylez.text}>{state.currentLanguage == 'Nederlands'? 'Selecteer buurt' : 'Select neighbourhood'}</Text>
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity style={stylez.button} onPress={() => navigation.navigate('AppInfo')}>
                <Text style={stylez.text}>{state.currentLanguage == 'Nederlands'? 'App informatie' : 'App information'}</Text>
            </TouchableOpacity>
        </View>
        <View style={stylez.wrap}>
            <View style={stylez.bottomButton}>
                <TouchableOpacity style={stylez.Container} onPress={() => navigation.navigate('Main')}>
                    <Text style={stylez.white}>{state.currentLanguage == 'Nederlands'? 'ANNULEREN' : 'CANCEL' }</Text>
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
    view2:{
        height: '100%'
    },
    button:{
        alignItems: 'center',
        borderColor: 'darkgreen',
        borderRadius: 5,
        borderWidth: 2,
        margin: 10,
        padding:15,
        width: 250
    },
    text:{
        fontSize: 20,
        color: 'darkgreen'
    },
    wrap:{
        position: 'absolute',
        bottom: 0
    },
    bottomButton:{
        flexDirection: 'column',
        backgroundColor: 'lightgrey',
        padding: 10,
        margin: 5,
        width: 300,
        alignItems: 'center'
    },
    Container:{
        backgroundColor: 'darkgreen',
        padding:15,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
        margin: 5,
        width: 170
    },
    white:{
        color: 'white'
    }
});

export default SettingsScreen;