import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialButtonPurple from "../components/MaterialButtonPurple";

function SignIn({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.titleApp}>Sign In</Text>
        <Icon name="fingerprint" style={styles.icon}></Icon>
        <TextInput
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.textInput1}
        ></TextInput>
        <TextInput
          placeholder="Passowrd"
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.textInput}
        ></TextInput>
        <View style={styles.materialButtonPurple3Row}>
          <MaterialButtonPurple name="Sign In"
            style={styles.materialButtonPurple3}
          ></MaterialButtonPurple>
          <MaterialButtonPurple name="Sign Up" onPress={() => navigation.navigate('SignUp')}
            style={styles.materialButtonPurple2}
          ></MaterialButtonPurple>
        </View>
      </View>
      <View style={styles.groupFiller}></View>
      <View style={styles.rect2}>
        <Text style={styles.makeByMinhTruong}>Make by Minh Truong</Text>
      </View>
      <StatusBar
        animated={false}
        barStyle="dark-content"
        hidden={false}
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(28,30,37,1)"
  },
  group: {
    height: 378,
    marginTop: 77
  },
  titleApp: {
    width: 424,
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    alignSelf: "center"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 47,
    marginLeft: 193
  },
  textInput1: {
    width: 355,
    height: 50,
    color: "#121212",
    borderColor: "rgba(144,19,254,1)",
    borderWidth: 0,
    borderBottomWidth: 4,
    fontFamily: "roboto-regular",
    marginTop: 27,
    marginLeft: 35
  },
  textInput: {
    width: 355,
    height: 50,
    color: "#121212",
    borderColor: "rgba(144,19,254,1)",
    borderWidth: 0,
    borderBottomWidth: 4,
    fontFamily: "roboto-regular",
    marginTop: 52,
    marginLeft: 35
  },
  materialButtonPurple3: {
    width: 118,
    height: 40,
    borderRadius: 55,
    borderColor: "#000000",
    borderWidth: 0
  },
  materialButtonPurple2: {
    width: 118,
    height: 40,
    borderRadius: 55,
    marginLeft: 51
  },
  materialButtonPurple3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 68,
    marginRight: 69
  },
  groupFiller: {
    flex: 1
  },
  rect2: {
    height: 45,
    backgroundColor: "rgba(144,19,254,1)"
  },
  makeByMinhTruong: {
    width: 167,
    height: 24,
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    marginTop: 13,
    alignSelf: "center"
  }
});

export default SignIn;
