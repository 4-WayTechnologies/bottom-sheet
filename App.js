import React, { useRef } from "react";
import { View, Button, Text,StyleSheet} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
 
export default function App() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
            <View>
            <Text style={styles.section_text}>Section</Text>
              <Text style={styles.textPrice}>Home</Text>
              <Text style={styles.textPrice}>About</Text>
              <Text style={styles.textPrice}>Contact</Text>

              <Text style={styles.textPrice}>Setting</Text>

              <Text style={styles.textPrice}>Network</Text>



            </View>
      </RBSheet>
    </View>
  );
}
const styles = StyleSheet.create({
section_text:{
  fontSize:20,
  alignSelf:'center',
  color:'#000000',
  textDecorationLine:'underline'
},textPrice:{
  color:'#000000',
  fontSize:16,
  marginHorizontal:20,
  marginVertical:3
}

})