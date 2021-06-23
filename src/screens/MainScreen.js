import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import Header from '../components/Header';
import { Context as LanguageContext } from '../context/LanguageContext';

const MainScreen = ({navigation}) => {
    const { state } = useContext(LanguageContext);

    return <View style={stylez.view}>
        <Header name='Menu'/>
        <View style={stylez.view2}>
            <TouchableOpacity style={stylez.button} onPress={() => navigation.navigate('Login')}>
                <Image style={stylez.image} source={require('../../assets/img/icon1.png')}/>
                <Text>{state.currentLanguage == 'Nederlands'? 'Taak' : 'Task'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylez.button} onPress={() => navigation.navigate('WorkList')}>
                <Image style={stylez.image} source={require('../../assets/img/worklist.png')}/>
                <Text>{state.currentLanguage == 'Nederlands'? 'Werklijst' : 'Worklist'}</Text>
            </TouchableOpacity>
        </View>
        <View style={stylez.view2}>
            <TouchableOpacity style={stylez.button} onPress={() => navigation.navigate('Login')}>
                <Image style={stylez.image} source={require('../../assets/img/history_app.png')}/>
                <Text>{state.currentLanguage == 'Nederlands'? 'Geschiedenis' : 'History'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylez.button} onPress={() => navigation.navigate('Login')}>
                <Image style={stylez.image} source={require('../../assets/img/worklist.png')}/>
                <Text>{state.currentLanguage == 'Nederlands'? 'Alle taken' : 'All tasks'}</Text>
            </TouchableOpacity>
        </View>
        <View style={stylez.view2}>
            <TouchableOpacity style={stylez.button} onPress={() => navigation.navigate('Settings')}>
                <Image style={stylez.image} source={require('../../assets/img/settings.png')}/>
                <Text>{state.currentLanguage == 'Nederlands'? 'Instellingen' : 'Settings'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylez.button} onPress={() => navigation.navigate('Login')}>
                <Image style={stylez.image} source={require('../../assets/img/logout_app.png')}/>
                <Text>{state.currentLanguage == 'Nederlands'? 'log uit' : 'log out'}</Text>
            </TouchableOpacity>
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
        flexDirection: 'row'
    },
    image:{
        width:120,
        height:120,
        margin: 20,
        marginBottom:5
    },
    button:{
        alignItems: 'center'
    }
});

export default MainScreen;