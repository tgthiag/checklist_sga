import React, { Component } from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../../config/rtdb/database";
import { ref, onValue } from "firebase/database";
import { getCurrentDate } from "../../functions/getDate";

const sgaBackground = require("../../../../assets/sga.jpg");

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flap: { verif: 0, errors: 0 },
    };
  }
  componentDidMount() {
    console.log("starting");
    const reference = ref(db, `records/`);
    console.log(reference);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={sgaBackground}
          style={styles.containerBackground}
        >
          <Text style={styles.Title}>Relatórios</Text>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBackground: {
    flex: 1,
    alignItems: "center",
  },
  Title: {
    fontSize: 48,
    color: "#FFFFFF",
    marginBottom: 50,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
export default Report;
