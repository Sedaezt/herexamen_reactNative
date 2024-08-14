// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// const accesoiresItem = props => {
//   return (
//     <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.id)}>
//       <View style={styles.accesoiresItem}>
//         <Image
//           style={styles.banner}
//           source={{
//             uri: props.banner
//           }}
//         />
//         <Text style={styles.title}>{props.title}</Text>
//         <Text style={styles.imgSlider}>{props.imgSlider}</Text>
//         <Text style={styles.richText}>{props.richText}</Text>
//         <Text style={styles.fullText}>{props.fullText}</Text>
//         <Text style={styles.introText}>{props.introText}</Text>


//       </View>
//     </TouchableOpacity >

//   );
// }

// const styles = StyleSheet.create({
//   accesoiresItem: {
//     padding: 12,
//     marginVertical: 8,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     shadowRadius: 1,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//   },
//   banner: {
//     height: 100
//   },
//   title: {
//     fontWeight: "bold",
//     color: "#D24335",
//     fontSize: 16,
//     marginTop: 12,
//     marginBottom: 12,
//     textTransform: "uppercase"
//   },
//   intro: {
//     marginBottom: 8
//   }
// });
// export default accesoiresItem;