import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const width = Dimensions.get("window").width;
import Styles from "../../common/Styles";

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    // flex: 1,
    // height: responsiveHeight(10), // 50% of window height
    // width: responsiveWidth(50), // 50% of window width
    // width: responsiveScreenWidth(99),
    backgroundColor: "green"
  },
  emotionContainer: {
    flex: 1,
    backgroundColor: "red"
  },
  employmentContainer: {
    flex: 1,
    backgroundColor: "#5e35b1"
  },
});
