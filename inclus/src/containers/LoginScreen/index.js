import {Text, View, TextInput, TouchableOpacity} from "react-native";
import React from "react";
import {style} from './style';

function LoginScreen({navigation}) {
    return (
        <View style={style.container}>
            <View style={style.containerHeader}>
                <Text style={style.titleHeader} onPress={() => navigation.goBack()}>{"<"}</Text>
                <Text style={style.titleHeader}>Welcome back</Text>
                <Text style={style.titleHeader}>Evan Tran</Text>
            </View>
            <View style={style.inputView}>
                <TextInput
                    style={style.inputText}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity>
                <Text style={style.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{flex:1}}>

            </View>
            <TouchableOpacity style={style.loginBtn}>
                <Text style={style.loginText}>LOG IN</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;