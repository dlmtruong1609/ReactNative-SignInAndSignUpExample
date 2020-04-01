import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faKey, faEnvelopeSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import React, { Component } from "react";

import { StyleSheet, Image } from "react-native";

import { Container, Content, Grid, Row, Button, Text, Input, Form, Item, View, Col } from "native-base";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Svg, { Path } from 'react-native-svg';

import ButtonGreen from '../components/Button/ButtonGreen';
function SignIn({navigation}) {
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
        <Svg viewBox="0 0 836 464.06471877282684" style={ {
          top: hp("-10"),
          left: 0,
          width: wp("100%"),
          height: hp("100%"),
          position: "absolute"
        }}>
          <Path
            strokeWidth={1}
            fill="rgba(104,201,240,1)"
            stroke="rgba(230, 230, 230,0)"
            d="M0.49 0.00 L1.49 363.89 C1.49 363.89 64.45 435.64 155.40 417.19 C246.34 398.74 333.29 282.91 429.24 298.29 C431.20 298.60 453.49 326.60 455.24 326.99 C538.81 345.56 358.94 418.97 486.20 455.12 C616.13 492.02 835.00 402.84 835.00 402.84 L836.00 159.91 C836.00 159.91 815.01 310.59 767.04 302.39 C719.07 294.19 849.99 241.91 691.08 240.88 C607.54 240.35 738.17 421.99 763.06 405.92 C766.00 404.02 676.68 240.86 679.11 240.88 C684.60 240.93 691.23 264.56 690.10 263.43 C687.91 261.25 665.77 246.72 614.15 352.61 C566.51 450.32 597.34 418.33 615.15 347.49 C631.15 283.82 627.05 187.79 567.31 127.15 C542.50 101.95 470.51 100.67 395.39 100.20 C382.95 101.61 333.30 110.13 308.60 123.22 C267.34 145.07 234.58 176.91 202.71 176.30 C202.32 176.20 181.44 189.23 183.90 189.19 C189.72 189.12 222.68 176.12 221.69 176.30 C204.16 179.53 235.49 179.99 218.46 176.60 C215.34 175.98 121.00 185.54 117.81 185.15 C-14.21 168.96 0.49 0.00 0.49 0.00 Z"
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
      <Row style={{justifyContent: "center", top: hp("22"), height: hp("40%"), zIndex: 5}}>
          <Form style={styles.form}>
            <Item style={styles.item}>
              <FontAwesomeIcon style={styles.icon} icon={faEnvelopeSquare}/>
              <Input style={styles.textInput} placeholder="Email" placeholderTextColor="rgba(15,121,110, 1)"/>
            </Item>
            <Item style={styles.item}>
              <FontAwesomeIcon style={styles.icon} icon={faKey}/>
              <Input style={styles.textInput} placeholder="Password" placeholderTextColor="rgba(15,121,110, 1)"/>
            </Item>
          </Form>
      </Row>
      <Row style={{justifyContent: "center", top: hp("10%")}} >
       <ButtonGreen name="Sign In" onPress={() => navigation.navigate('SignUp')} top={hp("7%")}></ButtonGreen>
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
    color: "rgba(15,121,110, 1)"
  }
});

export default SignIn;
