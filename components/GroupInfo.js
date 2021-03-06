import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { Text } from "react-native-elements";

const GroupInfo = ({ total, done, name, info }) => (
  <View style={styles.container}>
    <View style={styles.infoView}>
      <Text h3 style={styles.nameText}>
        {name}
      </Text>
      <Text h5 style={styles.infoText}>
        {info}
      </Text>
    </View>
    <View style={styles.doneTotalView}>
      <Text style={styles.doneTotalText}>
        {done}/{total}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    width: "100%",
    padding: 50
  },
  infoView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 150,
    paddingRight: 20,
    borderRightColor: "grey",
    borderRightWidth: 2,
    maxWidth: 200
  },
  doneTotalView: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    display: "flex",
    justifyContent: "center"
  },
  nameText: {
    marginBottom: 20
  },
  doneTotalText: {
    fontSize: 60
  }
});

export default GroupInfo;