import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

// const width = Dimensions.get("window").width;
import Styles from "../../common/Styles";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    // flex: 1,
    height: responsiveHeight(30),
    backgroundColor: "green",
  },
  emotionContainer: {
    // flex: 1,
    height: responsiveHeight(30),
    backgroundColor: "red"
  },
  employmentContainer: {
    backgroundColor: "#5e35b1"
  },
  containerHeader: {
    width: "50%",
    alignItems: 'center',
    marginVertical: 16,
    paddingVertical: 16,
    backgroundColor: 'white'
  },
  titleHeader: {
    marginBottom: 5,
    fontSize: 24,
    ...Styles.Fonts.fontMedium
  },
  quotes: {
    fontSize: 16,
    ...Styles.Fonts.fontRegularItalic
  },
  authorQuotes: {
    fontSize: 14,
    ...Styles.Fonts.fontRegularItalic
  },
  chipEmotion: {
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    paddingHorizontal: responsiveScreenFontSize(0.5),
    borderRadius: responsiveScreenFontSize(5),
    height: responsiveScreenHeight(5),
  },
  chipAvatar: {
    alignItems:'center',
    justifyContent:'center',
  }
});
