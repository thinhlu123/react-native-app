import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width;
import Styles from '../../common/Styles'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    containerHeader: {
        // height: 54,
        // backgroundColor: '#FF7951',
        // flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginVertical: 16,
        paddingVertical: 16,
    },
    titleHeader: {
        fontSize: 32,
        // color: 'white',
        ...Styles.Fonts.fontMedium
    },
    containerTextInput: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between'
        // paddingVertical:16,
    },
    inputView: {
        width: "80%",
        // backgroundColor:"#465881",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#5a82fb",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 15
    },
    socialAppleBtn: {
        width: "80%",
        backgroundColor: "#080809",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 15
    },
    socialFacebookBtn: {
        width: "80%",
        backgroundColor: "#5a82fb",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 15
    },
    socialGoogleBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 15
    },
    loginText: {
        color: "white"
    },
    dividerBlock: {
        flexDirection: 'row',
        width: "80%",
        marginBottom: 30,
    },
    dividerLine: {
        backgroundColor: 'black',
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    dividerText: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontSize: 16
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
})
