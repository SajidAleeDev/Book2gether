import { Text, TouchableOpacity } from "react-native";
import { TimeTableStyle } from "../Screens/TimeTableScreen";
import { TimeProps } from "../types/type";

const dateTimeItem = ({
  item,
  SelectedDate,
  ...props
}: TimeProps & TouchableOpacity["props"]) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        TimeTableStyle.button,
        {
          backgroundColor: SelectedDate ? "#75BDE0" : "#fff",
          borderWidth: SelectedDate ? 0 : 1,
        },
      ]}
    >
      <Text
        style={[
          TimeTableStyle.Text,
          {
            color: SelectedDate ? "#fff" : "#A7A7A7",
          },
        ]}
      >
        {item.startTime}
      </Text>
      <Text
        style={[
          TimeTableStyle.Text,
          {
            color: SelectedDate ? "#fff" : "#A7A7A7",
          },
        ]}
      >
        -{item.startTime}
      </Text>
    </TouchableOpacity>
  );
};

export default dateTimeItem;
