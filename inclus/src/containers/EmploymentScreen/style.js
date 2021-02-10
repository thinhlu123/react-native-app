import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
import Styles from "../../common/Styles";

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
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
