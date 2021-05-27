import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Spacer from '../components/Spacer';

const LoginScreen = ({navigation}) => {
    return <View style={stylez.view}>
        <Image style={stylez.image} source={require('../../assets/img/vredeEnRecht.jpg')} />
        <Text style={stylez.big2}>Den Haag</Text>
        <Text style={stylez.big1}>Facilitator app</Text>
        <Spacer>
            <TextInput style={stylez.input} placeholder='Emailadres/Telefoon nummer' placeholderTextColor='green'/>
        </Spacer>
        <TextInput style={stylez.input} placeholder='Wachtwoord' placeholderTextColor='green'/>
        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                <Text style={stylez.forgot}>Wachtwoord vergeten?</Text>
            </TouchableOpacity>
        </Spacer>
        <Spacer>
        <TouchableOpacity style={stylez.gContainer} onPress={() => navigation.navigate('Main')}>
            <Text style={stylez.white}>LOG IN</Text>
        </TouchableOpacity>
        </Spacer>
        <Spacer>
        <TouchableOpacity style={stylez.gContainer} onPress={() => navigation.navigate('Create')}>
            <Text style={stylez.white}>MAAK EEN ACCOUNT</Text>
        </TouchableOpacity>
        </Spacer>
    </View>
};

const stylez = StyleSheet.create({
    view:{
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'white',
        height: '100%'
    },
    input:{
        height: 50,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 7
    },
    image:{
        height: 150,
        width: 200
    },
    forgot:{
        color: 'green'
    },
    gContainer:{
        backgroundColor: 'darkgreen',
        padding:20,
        borderRadius: 5,
        width: 200,
        alignItems: 'center'
    },
    white:{
        color: 'white'
    },
    big2:{
        fontSize: 25,
        color: 'darkgreen'
    },
    big1:{
        fontSize: 15,
        color: 'darkgreen'
    }
});

export default LoginScreen;