import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { listSectors } from "../../sources/lists";

const sgaBackground = require("../../../../assets/sga.jpg");
const logo = require("../../../../assets/sga_logo.png");

export default function MainPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={sgaBackground} style={styles.ImageBackground}>
        <SafeAreaView style={styles.centerContainer}>
          <Image source={logo} style={styles.logo} />
          <FlatList
            style={{ width: "100%", height: "10%" }}
            data={listSectors}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
                onPress={() =>
                  navigation.navigate("checklist", {
                    setores: item.lista,
                    fireDBName: item.key,
                  })
                }
              >
                <LinearGradient
                  style={{
                    width: "60%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    padding: 5,
                  }}
                  colors={[
                    "#fbe1fa",
                    "rgba(0,0,0,0.5)",
                    "rgba(0,0,0,0.6)",
                    "rgba(0,0,0,0.8)",
                  ]}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#ffffff",
                      fontSize: 15,
                    }}
                  >
                    {item.name}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
            onPress={() => navigation.navigate("report")}
          >
            <LinearGradient
              style={{
                width: "60%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
                padding: 5,
              }}
              colors={[
                "#fbe1fa",
                "rgba(0,0,0,0.5)",
                "rgba(0,0,0,0.6)",
                "rgba(0,0,0,0.8)",
              ]}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  fontSize: 15,
                }}
              >
                RELATÓRIOS
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    width: "90%",
    height: "90%",
    backgroundColor: "rgba(60,60,60,0.3)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 0.1,
    borderBottomWidth: 0.8,
    borderRightWidth: 0.1,
  },
  logo: {
    justifyContent: "center",
    marginBottom: 30,
  },
  button: {
    margin: 20,
  },
});
