// import React, { Fragment, useEffect } from "react";
// import { View, Text, StatusBar, SafeAreaView } from "react-native";
// import CalendarHeatmap from "@freakycoder/react-native-calendar-heatmap";
// import { Data1, Data2, Data3 } from "../data";
// import { useContext } from "react";
// import AppContext from "../Context/AppContext";

// export default function Stats() {
//   const { user, setUser } = useContext(AppContext);
//   useEffect(() => {
//     console.log(typeof user.name);
//   }, [setUser]);

//   if (user.name == "olivia") {
//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView style={{ flex: 1 }}>
//           <View style={{ flex: 1 }}>
//             <View style={{ margin: 16 }}>
//               <Text
//                 style={{
//                   fontWeight: "600",
//                   fontSize: 16,
//                   color: "#D44B79",
//                   backgroundColor:'lightgray',
//                   textAlign: "center",
//                   marginBottom: "10%",
//                 }}
//               >
//                 Activity Indicator
//               </Text>
//               <View
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   marginLeft: "10%",
//                 }}
//               >
//                 <Text style={{ marginLeft: "15%" }}>Jan</Text>
//                 <Text style={{ marginLeft: "10%" }}>Mar </Text>
//                 <Text style={{ marginLeft: "10%" }}>Jun</Text>
//                 <Text style={{ marginLeft: "10%" }}>Aug</Text>
//               </View>
//               <CalendarHeatmap
//                 endDate={new Date("2019-03-25")}
//                 numDays={115}
//                 colorArray={[
//                   "lightgray",
//                   ,
//                   "#D44B79",
//                   "#6B1928",
//                   "#9F3251",
//                   "#360000",
//                 ]}
//                 values={Data1}
//               />
//             </View>
//           </View>
//         </SafeAreaView>
//       </Fragment>
//     );
//   } else if (user.name == "Tofflan") {
//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView style={{ flex: 1 }}>
//           <View style={{ flex: 1 }}>
//             <View style={{ margin: 16 }}>
//               <Text
//                 style={{
//                   fontWeight: "600",
//                   fontSize: 16,
//                   color: "#98FB98",
//                   backgroundColor:'lightgray',
//                   textAlign: "center",
//                   marginBottom: "10%",
//                 }}
//               >
//                 Activity Indicator
//               </Text>
//               <View
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   marginLeft: "10%",
//                 }}
//               >
//                 <Text style={{ marginLeft: "15%" }}>Jan</Text>
//                 <Text style={{ marginLeft: "10%" }}>Mar </Text>
//                 <Text style={{ marginLeft: "10%" }}>Jun</Text>
//                 <Text style={{ marginLeft: "10%" }}>Aug</Text>
//               </View>
//               <CalendarHeatmap
//                 endDate={new Date("2019-03-25")}
//                 numDays={115}
//                 values={Data2}
//                 colorArray={[
//                   "lightgray",
//                   ,
//                   "#66CDAA",
//                   "#00FF7F",
//                   "#00FA9A",
//                   "#98FB98",
//                 ]}
//               />
//             </View>
//           </View>
//         </SafeAreaView>
//       </Fragment>
//     );
//   } else {
//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView style={{ flex: 1 }}>
//           <View style={{ flex: 1 }}>
//             <View style={{ margin: 16 }}>
//               <Text
//                 style={{
//                   fontWeight: "600",
//                   fontSize: 16,
//                   color: "#656ac6",
//                   backgroundColor:'lightgray',
//                   textAlign: "center",
//                   marginBottom: "10%",
//                 }}
//               >
//                 Activity Indicator
//               </Text>
//               <View
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   marginLeft: "10%",
//                 }}
//               >
//                 <Text style={{ marginLeft: "15%" }}>Jan</Text>
//                 <Text style={{ marginLeft: "10%" }}>Mar </Text>
//                 <Text style={{ marginLeft: "10%" }}>Jun</Text>
//                 <Text style={{ marginLeft: "10%" }}>Aug</Text>
//               </View>
//               <CalendarHeatmap
//                 endDate={new Date("2019-03-25")}
//                 numDays={115}
//                 colorArray={[
//                   "lightgray",
//                   "#bcd6f7",
//                   "#656ac6",
//                   "#393b99",
//                   "#191c5c",
//                 ]}
//                 values={Data3}
//               />
//             </View>
//           </View>
//         </SafeAreaView>
//       </Fragment>
//     );
//   }
// }
