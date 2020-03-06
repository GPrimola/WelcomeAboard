import React from "react";
import { StyleSheet, View } from "react-native";

import { Button, Image, Text } from "react-native-elements";
import { AsyncStorage } from "react-native";

import { getUserEmail, signInWithGoogleAsync, signOutUser, storeUserData } from "./service";

class Login extends React.Component {

  componentDidMount() {
    getUserEmail()
    .then((email) => {
      if (email) {
        this.goToHome();
      }
    });
  }

  performSignIn = () => {
    signInWithGoogleAsync()
      .then(({ user }) => {
        storeUserData(user).then(() => {
          this.goToHome();
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({});
      });
  };

  goToHome () {
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          placeholderStyle={{ backgroundColor: "#3388FF" }}
          source={{
            uri:
              "https://2rgcp03vze5q2c18vc3anod5-wpengine.netdna-ssl.com/wp-content/themes/sumup/assets/images/logo-branco.png"
          }}
          style={{ height: 32, width: 108 }}
        />
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          h1
        >
          Welcome Aboard!
        </Text>
        <Button
          onPress={this.performSignIn}
          buttonStyle={styles.signInButton}
          titleStyle={{ color: "black" }}
          title="Sign in with Google"
          icon={
            <Image
              style={{ width: 30, height: 30 }}
              placeholderStyle={{ backgroundColor: "white" }}
              source={{
                uri:
                  "https://mobilbranche.de/wp-content/uploads/2017/12/Google-Suchindex-mobil-Smartphone-Tablet.png"
              }}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 60,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#3388FF"
  },
  signInButton: {
    height: 60,
    width: "100%",
    backgroundColor: "white"
  }
});

export default Login;
