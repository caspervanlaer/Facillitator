import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { navigate } from '../NavigationRef';

const Header = ({name, navPath}) => {
    if (navPath) {
        return <View style={stylez.view}>
            <TouchableOpacity onPress={() => navigate(navPath)}>
                <Image style={stylez.backButton} source={require('../../assets/img/backbutton.png')} />
            </TouchableOpacity>
            <Image style={stylez.image} source={require('../../assets/img/aflogo.png')} />
            <View style={stylez.greenRow}>
                <Text style={stylez.white}>{name}</Text>
            </View>
        </View>
    }else {
        return <View style={stylez.view}>
            <Image style={stylez.image} source={require('../../assets/img/aflogo.png')} />
            <View style={stylez.greenRow}>
                <Text style={stylez.white}>{name}</Text>
            </View>
        </View>
    }
}

const stylez = StyleSheet.create({
    view:{
        width: '100%',
        alignItems: 'center'
    },
    image:{
        width:70,
        height:65,
        marginTop: 10
    },
    greenRow:{
        backgroundColor: 'darkgreen',
        width: '100%',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    white:{
        color: 'white'
    },
    backButton:{
        width:70,
        height:70,
        marginTop: 10,
        position: 'absolute',
        right: 110
    }
})

export default Header;