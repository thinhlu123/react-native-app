import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");
import Styles from "../../../common/Styles";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    // height: responsiveHeight(10), // 50% of window height
    // width: responsiveWidth(50), // 50% of window width
    // width: responsiveScreenWidth(99),
    backgroundColor: "green",
  },
  titleHeader: {
    marginBottom: 5,
    fontSize: responsiveFontSize(5),
    ...Styles.Fonts.fontMedium
  },
});
