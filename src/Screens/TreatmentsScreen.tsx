// import React, { useState } from "react";
// import { StyleSheet, View, FlatList } from "react-native";
// import BackButton from "../components/BackButton";
// import SafeArea from "../components/SafeArea";
// // import { TreatmentsItemProps } from "../types/type";
// import TreatmentButton from "../components/TreatmentButton";

// export interface TreatmentsItemProps {
//   route?: {
//     params: {
//       data: {
//         name: string;
//         Treatments: {
//           name: string;
//           duration: string;
//           price: string;
//         }[];
//       }[];
//     };
//   };
// }

// const TreatmentsScreen = ({ route }: TreatmentsItemProps) => {
//   const data = route?.params.data;
//   const [SelectedTreatment, setSelectedTreatment] = useState<number>(0);
//   const [SelectedTreatmentDetails, setSelectedTreatmentDetails] = useState([]);

//   console.log(SelectedTreatmentDetails);
//   return (
//     <SafeArea gray>
//       <View style={TreatmentsStyle.container}>
//         <BackButton color="#000" title="Select Treatment" />
//         <View style={TreatmentsStyle.TreatmentFilter}>
//           <FlatList
//             data={data}
//             horizontal
//             renderItem={({ item, index }: any) => (
//               <TreatmentButton
//                 item={item}
//                 SelectedTreatment={SelectedTreatment === index}
//                 key={index + 1}
//                 onPress={() => {
//                   setSelectedTreatment(index);
//                   setSelectedTreatmentDetails(item.Treatments);
//                 }}
//               />
//             )}
//           />
//         </View>
//       </View>
//     </SafeArea>
//   );
// };

// export default TreatmentsScreen;

// export const TreatmentsStyle = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   TreatmentFilter: {
//     marginTop: 20,
//   },
// });
import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import BackButton from "../components/BackButton";
import SafeArea from "../components/SafeArea";
import TreatmentButton from "../components/TreatmentButton";
import { TreatmentsItemProps } from "../types/type";
import TreatmentDetails from "../components/TreatmentDetails";
import Button from "../components/Button";

const TreatmentsScreen = ({ route }: TreatmentsItemProps) => {
  const data = route?.params.data;
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(0);
  const [selectedTreatmentDetailsItem, setSelectedTreatmentDetailsItem] =
    useState<null | number>(null);
  const [selectedTreatmentDetails, setSelectedTreatmentDetails] =
    useState<any>(null);

  useMemo(() => {
    if (
      data &&
      selectedTreatment !== null &&
      selectedTreatment >= 0 &&
      selectedTreatment < data.length
    ) {
      setSelectedTreatmentDetails(data[selectedTreatment].Treatments);
    }
  }, [data, selectedTreatment]);

  return (
    <SafeArea gray>
      <View style={TreatmentsStyle.container}>
        <BackButton color="#000" title="Select Treatment" />
        <View style={TreatmentsStyle.TreatmentFilter}>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item, index }: any) => (
              <TreatmentButton
                item={item}
                SelectedTreatment={selectedTreatment === index}
                key={index + 1}
                onPress={() => {
                  setSelectedTreatment(index);
                }}
              />
            )}
          />
        </View>

        <View
          style={{
            paddingTop: 10,
            flex: 1,
          }}
        >
          <FlatList
            data={selectedTreatmentDetails}
            renderItem={({ item, index }) => (
              <TreatmentDetails
                key={index + 1}
                item={item}
                selected={selectedTreatmentDetailsItem === index}
                onPress={() => {
                  setSelectedTreatmentDetailsItem(index);
                }}
              />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            style={{
              flex: 1,
            }}
          />
        </View>
        <Button title="Book" />
      </View>
    </SafeArea>
  );
};

export default TreatmentsScreen;

export const TreatmentsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
  },
  TreatmentFilter: {
    marginTop: 20,
  },
});
