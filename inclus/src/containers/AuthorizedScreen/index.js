import {Text, View, TextInput, TouchableOpacity} from "react-native";
// import { LoginButton } from 'react-native-fbsdk';
import React from "react";
import { style } from './style';
import { connect } from "react-redux";
import { toggleTheme } from "../../redux/reducers/themeReducers/action";
import Icon from 'react-native-vector-icons/FontAwesome';

function AuthorizedScreen({navigation, toggleTheme}) {
    return (
        <View style={style.container}>
            <View style={style.containerHeader}>
                <Text style={style.titleHeader}>Login or Sign up</Text>
            </View>
            <View style={style.inputView} >
                <TextInput
                    style={style.inputText}
                    placeholder="Email..."
                    // placeholderTextColor="#003f5c"
                    // onChangeText={text => this.setState({email:text})}
                />
            </View>
            <TouchableOpacity style={style.loginBtn} onPress={() => navigation.navigate('LoginScreen')}>
                <Text
                    style={style.loginText}
                >CONTINUE</Text>
            </TouchableOpacity>

            <View style={style.dividerBlock}>
                <View style={style.dividerLine} />
                <Text style={style.dividerText}>or</Text>
                <View style={style.dividerLine} />
            </View>

            <TouchableOpacity style={style.socialAppleBtn}>
                <Text style={style.loginText}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.socialFacebookBtn} onPress={() => toggleTheme(true)}>
                <Text style={style.loginText}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.socialGoogleBtn, style.shadow]} onPress={() => toggleTheme(false)}>
                <Text style={style.loginText}>Continue with Google</Text>
            </TouchableOpacity>
          <Icon name="rocket" size={30} color="#900" />
        </View>
    );
}

export default connect(null, {toggleTheme})(AuthorizedScreen)
