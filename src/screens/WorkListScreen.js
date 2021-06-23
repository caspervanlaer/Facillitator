import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import Header from '../components/Header';
import { Context as LanguageContext } from '../context/LanguageContext';

const WorkListScreen = ({ navigation }) => {
    const { state } = useContext(LanguageContext);

    return <View style={stylez.view3}>
        <Header name={state.currentLanguage == 'Nederlands'? 'Werk lijst' : 'Worklist'}/>
        <View style={stylez.view}>
            <TouchableOpacity style={stylez.button}>
                <View style={stylez.view2}>
                    <Image style={stylez.image} source={require('../../assets/img/presentation1.png')}/>
                </View>
                <View style={stylez.text}>
                    <Text>{state.currentLanguage == 'Nederlands'? 'Taak plannen' : 'Task planning'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={stylez.button2}>
                <View style={stylez.view2}>
                    <Image style={stylez.image} source={require('../../assets/img/event1.png')}/>
                </View>
                <View style={stylez.text}>
                    <Text>{state.currentLanguage == 'Nederlands'? 'Taak behandelen' : 'Task handeling'}</Text>
                </View>
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
}

const stylez = StyleSheet.create({
    image:{
        width:40,
        height:40,
        backgroundColor: 'darkgreen',
        marginTop: '8%'
    },
    button:{
        flexDirection: 'row',
        borderColor: 'darkgreen',
        borderWidth: 1,
        borderRadius: 5,
        width: 250,
        marginTop: '40%'
    },
    button2:{
        flexDirection: 'row',
        borderColor: 'darkgreen',
        borderWidth: 1,
        borderRadius: 5,
        width: 250,
        marginTop: '10%'
    },
    view:{
        height: '80%',
        alignItems: 'center',
    },
    view2:{
       width: 50,
       height: 50,
       backgroundColor: 'darkgreen',
       alignItems: 'center'
    },
    view3:{
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
    },
    text:{
        alignItems: 'center',
        width: '80%',
        paddingTop: 15
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
})

export default WorkListScreen;