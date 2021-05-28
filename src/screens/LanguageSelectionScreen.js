import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import { Context as LanguageContext } from '../context/LanguageContext';

const LanguageSelectionScreen = ({navigation}) => {
    const { state, selectLanguage } = useContext(LanguageContext)

    return <View style={stylez.view}>
        <Header name={state.currentLanguage == 'Nederlands'? 'Taal selectie' : 'Language selection' }/>
        <View style={stylez.view2}>
            <TouchableOpacity style={stylez.Container} onPress={() => {navigation.navigate('Login') ; selectLanguage('Nederlands')}}>
                <Text style={stylez.white}>Nederlands</Text>
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity style={stylez.Container} onPress={() => {navigation.navigate('Login') ; selectLanguage('English')}}>
                <Text style={stylez.white}>English</Text>
            </TouchableOpacity>
            <Text>{state.currentLanguage}</Text>
        </View>
    </View>
};

const stylez = StyleSheet.create({
    view:{
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%'
    },
    view2:{
        height: '50%',
        alignItems: 'center',
        top: '25%'
    },
    white:{
        color: 'white'
    },
    Container:{
        backgroundColor: 'darkgreen',
        padding:20,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
        margin: 5
    }
});

export default LanguageSelectionScreen;