import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faKey, faEnvelopeSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import React, { Component } from "react";

import { StyleSheet, Image } from "react-native";

import { Container, Content, Grid, Row, Button, Text, Input, Form, Item, View, Col } from "native-base";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Dimensions } from "react-native";

import Svg, { Path } from 'react-native-svg';

import ButtonGreen from '../components/Button/ButtonGreen';
function SignUp({navigation}) {
  return (
    <Grid style={styles.container}>
      <Row>
        <FontAwesomeIcon onPress={() => navigation.navigate('Home')} style={{color: "#fff", left: wp("5%"), top: hp("4%"), zIndex: 3}} size={30} icon={faArrowLeft}/>
      </Row>
      <Row style={{backgroundColor: "rgba(15,121,110,1))", height: hp("5%"), zIndex: 0,position: 'absolute'}}>
        <Svg
          viewBox="0 0 838.6567065698935 745.6147150954994"
          style={styles.path}
        >
          <Path
            strokeWidth={1}
            fill="rgba(15,121,110,1)"
            stroke="rgba(230, 230, 230,0)"
            d="M0.00 0.00 L0.24 374.34 L1.25 386.34 C1.25 386.34 0.70 400.21 1.25 415.34 C2.88 460.12 10.93 548.06 126.55 566.00 C281.23 590.00 229.00 466.00 471.05 475.00 C713.11 484.00 585.55 798.00 626.73 738.00 C667.91 678.00 670.93 571.00 739.22 662.00 C807.52 753.00 836.65 569.00 836.65 569.00 L838.66 1.00 L0.00 0.00 Z"
          ></Path>
        </Svg>
      </Row>
      <Row  style={{position: 'absolute'}}>
        <Col>
          <Text style={styles.hi}>Hello! Wellcome to Green of vitality</Text>
        </Col>
        <Col>
          <Image style={styles.image} source={{uri: "https://i.imgur.com/3zbcvRT.png"}}/>
        </Col>
      </Row>
      <Row style={{justifyContent: "center", top: hp("10"), height: hp("40%"), zIndex: 5}}>
          <Form style={styles.form}>
            <Item style={styles.item}>
              <FontAwesomeIcon style={styles.icon} icon={faEnvelopeSquare}/>
              <Input style={styles.textInput} placeholder="Email"/>
            </Item>
            <Item style={styles.item}>
              <FontAwesomeIcon style={styles.icon} icon={faKey}/>
              <Input style={styles.textInput} placeholder="Password"/>
            </Item>
            <Item style={styles.item}>
              <FontAwesomeIcon style={styles.icon} icon={faKey}/>
              <Input style={styles.textInput} placeholder="Confirm Password"/>
            </Item>
          </Form>
      </Row>
      <Row style={{justifyContent: "center", top: hp("10%")}}>
        <ButtonGreen name="Sign Up" onPress={() => navigation.navigate('SignUp')} top={hp("7%")}></ButtonGreen>
      </Row>
    </Grid>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "relative",
    flex: 1
  },
  form: {
    width: "80%",
    top: hp("10%")
  },
  item: {
    marginBottom: "10%",
    borderBottomColor: "rgba(15,121,110, 1)"
  },
  hi: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 30,
    left: wp("5%"),
    top: hp("10%")
  },
  path: {
    width: wp("100%") ,
    height: wp("100%")
  },
  image: {
    zIndex: 5,
    width: wp("50%"),
    height: hp("70%"),
    top: hp("0%")
  },
  icon: {
    color: "black"
  }
});

export default SignUp;
