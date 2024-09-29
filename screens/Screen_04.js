import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constant/Color";
import PrimaryButton from "../components/ui/PrimaryButton";

const Screen_04 = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_03")}>
          <Text style={styles.label}>
            <Ionicons name="chevron-back-outline" size={16} /> Product name
          </Text>
        </TouchableOpacity>
        <Image source={require("../assets/images/Container 7 (3).png")}></Image>
        <View style={styles.smallImagesContainer}>
          <Image
            source={require("../assets/images/Container 7 (1).png")}
          ></Image>
          <Image
            source={require("../assets/images/Container 7 (2).png")}
          ></Image>
          <Image
            source={require("../assets/images/Container 7 (4).png")}
          ></Image>
          <Image source={require("../assets/images/Container 7.png")}></Image>
        </View>
        <Text
          style={{
            color: Colors.primaryColor,
            fontWeight: "bold",
            fontSize: 32,
            paddingTop: 10,
            flexDirection: "row",
          }}
        >
          $2,99 <Text style={styles.redLabel}>Buy 1 get 1</Text>
        </Text>
        <View>
          <View>
            <Text>Product name</Text>
            <Text>Occaecat est deserunt tempor offci</Text>
          </View>
          <View>
            <Image source = {require('../assets/images/Rating 3.png')}/>
            <Text>4.5</Text>
          </View>
        </View>
        <Text>Size</Text>

        <Text>Quantity</Text>
        <View></View>
        <View style = {styles.viewStyleForLine}></View>
        <Text>Size guide</Text>
        <View style = {styles.viewStyleForLine}></View>
        <Text>Reviews (99) </Text>
        <View style = {styles.viewStyleForLine}></View>
        <PrimaryButton >Add to Cart</PrimaryButton>
      </View>
    </View>
  );
};

export default Screen_04;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    padding: 20,
  },
  nav: {
    width: "100%",
    padding: 20,
    alignItems: "flex-start",
  },
  label: {
    fontWeight: "bold",
  },
  smallImagesContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  redLabel: {
    color: "red",
    fontSize: 10,
    backgroundColor: "#FEE9EB",
    padding: 5,
    borderRadius: 10,
  },
  viewStyleForLine: {
    borderBottomColor: "black", 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    alignSelf:'stretch',
    width: "100%"
  },
});
