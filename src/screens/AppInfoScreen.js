import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import Header from '../components/Header';
import { Context as LanguageContext } from '../context/LanguageContext';

const AppInfoScreen = ({navigation}) => {
    const { state } = useContext(LanguageContext);

    return <View style={stylez.view}>
        <Header name={state.currentLanguage == 'Nederlands'? 'App informatie' : 'App information' }/>
        <Spacer>
            <View style={stylez.view2}>
                <Text style={stylez.text}>Facilitator App</Text>
                <Text style={stylez.text2}>{state.currentLanguage == 'Nederlands'? 'Versie 0.16' : 'Version 0.16' }</Text>
            </View>
        </Spacer>
        <Image style={stylez.image} source={require('../../assets/img/aflogo.png')} />
        <Spacer>
            <View style={stylez.view2}>
                <Text style={stylez.text2}>{state.currentLanguage == 'Nederlands'? 'Ontwikkeld door:' : 'Developed by' }</Text>
                <Text style={stylez.text2}>Savana Solutions</Text>
            </View>
        </Spacer>
        <Text style={stylez.text2}>Connect@savana.solutions</Text>
        
        <View style={stylez.wrap}>
            <View style={stylez.bottomButton}>
                <TouchableOpacity style={stylez.Container} onPress={() => navigation.navigate('Settings')}>
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
        alignItems: 'center',
        backgroundColor: 'white',
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
    text2:{
        fontSize: 15,
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
    },
    image:{
        height: 200,
        width: 200
    }
});

export default AppInfoScreen;