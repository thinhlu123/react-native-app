import React, {useState} from "react";
import { View } from "react-native";
import { style } from "./style";
import {Calendar} from 'react-native-calendars';


function EmploymentScreen({ navigation }) {
  const [selected, setSelected] = useState('')
  const today = Date.now()
  const nextWeekDay = Date.now()
  const nextDay = Date.now()
  const mark = {
    '2021-02-16': {selected: true, marked: true}
  };
  const onDayPress = day => {
    return setSelected(day.dateString)
  }
  return (
    <View style={style.container}>
      <Calendar
        onDayPress={(day) => {
          console.log('selected day', day)
        }}
        current={'2021-02-06'}
        minDate={'2020-02-06'}
        maxDate={'2022-02-06'}
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'orange',
            selectedTextColor: 'red'
          }
        }}
      />
    </View>

  );
}

export default EmploymentScreen;
