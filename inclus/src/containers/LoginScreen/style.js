import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width;
import Styles from '../../common/Styles'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerHeader: {
        width: "80%",
        marginVertical: 16,
        paddingVertical: 16,
    },
    titleHeader: {
        fontSize: 32,
        ...Styles.Fonts.fontMedium
    },
    inputView: {
        width: "80%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        height: 50,
        justifyContent: "center",
        padding: 20,
        marginBottom: 20,
    },
    inputText: {
        height: 50,
        // color: "white"
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
    loginText: {
        color: "white",
        fontSize: 16,
        ...Styles.Fonts.fontMedium
    },
    forgotText: {
        color: '#5a82fb',
        fontSize: 16,
        ...Styles.Fonts.fontMedium
    }
})