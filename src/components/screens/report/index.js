import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../../config/rtdb/database";
import { ref, onValue } from "firebase/database";
import { getCurrentDate } from "../../functions/getDate";
import { listSectors } from "../../sources/lists";

const sgaBackground = require("../../../../assets/sga.jpg");
var element2 = [
  { text: "Segregação de falhas", verif: 3, errors: 0, percent: "100.00" },
  { text: "Segregação de falhas", verif: 3, errors: 0, percent: "100.00" },
];
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flap: [],
      generalData: [],
      stageData: [],
      showView: null,
      setorPercent: [],
      contextTurno:  []
    };
  }
  componentDidUpdate() {}
  componentDidMount() {
    console.log("starting");
    const reference = ref(db, `records/`);
    const prev = { flap: [] };
    console.log("CTXXXXXXXXXXXXXX", this.state.contextTurno )
    // console.log(reference);
    onValue(
      reference,
      (snapshot) => {
        const data = snapshot.val();
        // data.map((item) => console.log(item)
        // )
        let verifications = 0;
        let isOk = 0;
        let errors = 0;
        let setorVerifications = 0;
        let setorIsOk = 0;
        for (let idxLista = 0; idxLista < listSectors.length; idxLista++) {
          //verify Y times, Y = list length
          let acumulator = [];
          let percentAcumulator = [];
          for (let y = 1; y < listSectors[idxLista].lista.length; y++) {
            //Entering folder, acessing dates
            for (let i in data[listSectors[idxLista].key]) {
              // Acessing the key/values on every date
              for (let x in data[listSectors[idxLista].key][i]) {
                //key data.flap[i]      value data.flap[i][x]
                if (
                  (x === `1_${y}`) &
                  (data[listSectors[idxLista].key][i][x] === 1 ||
                    data[listSectors[idxLista].key][i][x] === 0)
                ) {
                  verifications += 1;
                }
                if (
                  (x === `1_${y}`) &
                  (data[listSectors[idxLista].key][i][x] === 1)
                ) {
                  isOk += 1;
                }
                if (
                  (x === `1_${y}`) &
                  (data[listSectors[idxLista].key][i][x] === 0)
                ) {
                  errors += 1;
                }
              }
            }

            acumulator.push({
              ...acumulator[listSectors[idxLista].key],
              text: listSectors[idxLista].lista[y - 1],
              verif: verifications,
              errors: errors,
              percent: ((isOk / verifications) * 100).toFixed(2),
            });
            setorVerifications = setorVerifications + verifications;
            setorIsOk = setorIsOk + isOk;

            verifications = 0;
            isOk = 0;
            errors = 0;
          }

          this.setState((previous) => ({
            setorPercent: {
              ...previous.setorPercent,
              [listSectors[idxLista].key]: (
                (setorIsOk / setorVerifications) *
                100
              ).toFixed(2),
            },
          }));
          setorIsOk = 0;
          setorVerifications = 0;
          console.log("poercent acumulator", percentAcumulator);
          this.setState((previous) => ({
            generalData: {
              ...previous.generalData,
              [listSectors[idxLista].key]: acumulator,
            },
          }));
          console.log("general data", this.state.generalData);
          console.log("percentttttttt", this.state.setorPercent);
        }
      },
      {
        onlyOnce: true,
      }
    );
  }
  backColor(percent, opacity) {
    if (percent < 95 && percent > 80) {
      return `rgba(255, 242, 0, 0.${opacity})`;
    } else if (percent < 90) {
      return `rgba(223, 112, 0, 0.${opacity})`;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={sgaBackground}
          style={styles.containerBackground}
        >
          <Text style={styles.Title}>Relatórios</Text>
          <ScrollView>
            {Object.keys(this.state.generalData)
              .map((k) => this.state.generalData[k])
              .map((setor, index) => (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() =>
                      this.state.showView === index
                        ? this.setState({ showView: null })
                        : this.setState({ showView: index })
                    }
                  >
                    <View
                      style={{
                        margin: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        padding: 5,
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "space-between",
                          marginVertical: 2,
                        }}
                      >
                        <Text
                          style={{
                            alignSelf: "flex-start",
                            marginLeft: 10,
                            fontWeight: "bold",
                            fontSize: 22,
                          }}
                        >
                          {listSectors[index].name}
                        </Text>
                        <Text
                          style={{
                            alignSelf: "center",
                            marginLeft: 10,
                            fontWeight: "bold",
                            fontSize: 16,
                          }}
                        >
                          {/* ⬤ */}
                          {this.state.setorPercent[listSectors[index].key]}%
                        </Text>
                      </View>
                      {this.state.showView !== null &&
                        this.state.showView === index &&
                        setor.map((each) => (
                          <View
                            style={{
                              backgroundColor: this.backColor(each.percent, 3),
                              margin: 3,
                              borderRadius: 5,
                              padding: 2,
                            }}
                          >
                            <Text style={{ fontWeight: "bold" }}>
                              {each.text}
                            </Text>
                            <Text>
                              Verificações: {each.verif} erros: {each.errors}{" "}
                              percentual: {each.percent}%
                            </Text>
                          </View>
                        ))}
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
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
  },
  Title: {
    fontSize: 48,
    color: "#FFFFFF",
    marginBottom: 20,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    alignSelf: "center",
  },
});
export default Report;
