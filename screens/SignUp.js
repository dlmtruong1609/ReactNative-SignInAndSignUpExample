import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import { Container, Content, Grid, Row, Button, Text, Image, Input, Form, Item, View } from "native-base";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
function SignUp({navigation}) {
  return (
    <Container style={styles.container}>
    <FontAwesomeIcon icon={faCoffee} />

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(15,121,110,1)",
    position: "relative"
  },
  btnSignUp: {
    width: "80%",
    height: hp("8"),
    top: hp("40%"),
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center"
  },
  form: {
    width: "80%",
    top: hp("30%")
  },
  textInput: {
    color: "#fff"
  },
  item: {
    marginBottom: "10%"
  }
});

export default SignUp;
