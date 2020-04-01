import React from "react";

import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Grid, Row, Button, Text, Col } from "native-base";

import ButtonGreen from "../components/Button/ButtonGreen";
import ButtonWhite from "../components/Button/ButtonWhite";

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/564x/e0/5d/3a/e05d3ab42b6dbb32542a862179ee6d89.jpg',
      }}
      resizeMode="cover"
      style={styles.image}
    >
    <Grid>
        <Row><Image style={styles.imageLogo} source={{
          uri: 'https://i.imgur.com/SONWM6V.png',
        }} resizeMode="cover"/><Text style={styles.txtTitle}>Make by Dang Truong</Text></Row>
        <Row><Text style={styles.txtSlogan}>Every part of the world is green, if every heart of the human is green.</Text></Row>
        <Row style={{justifyContent: "center"}}><ButtonGreen name="Sign Up" onPress={() => navigation.navigate('SignUp')} top={hp("22")}></ButtonGreen></Row>
        <Row style={{justifyContent: "center"}}><ButtonWhite top={hp('14')} style={styles.btnSignIn} onPress={() => navigation.navigate('SignIn')} name="Sign In"></ButtonWhite></Row>
        <Row style={{justifyContent: "center"}}><Text style={styles.txtFotgotPW}>Forgot password?</Text></Row>
    </Grid>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(15,15, 15,1)",
    flex: 1,
    position: "absolute"
  },
  txtFotgotPW: {
    color: "#fff",
    top: hp("10"),
    textDecorationLine: "underline"
  },
  txtSlogan: {
    color: "#fff",
    fontWeight: "bold",
    width: "90%",
    fontSize: 30,
    top: hp("-8"),
    left: wp("9")
  },
  txtTitle: {
    color: "#fff",
    top: hp("4"),
    left: wp("11")
  },
  imageLogo: {
    top: hp("3"),
    left: wp("9"),
    width: wp("10"),
    height: wp("10"),
  }
});

export default Home;
