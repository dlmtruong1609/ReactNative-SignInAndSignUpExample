import React from 'react';

import { Button, Text } from 'native-base';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ButtonGreen = (props) => {
  return (
    <Button rounded style={{
      width: "80%",
      height: hp("8"),
      backgroundColor: "rgba(15,121,110, 0.7)",
      top: props.top,
      justifyContent: "center"
    }} onPress={props.onPress}><Text style={{fontWeight: "bold", color: "#fff",  fontSize: 20}} >{props.name}</Text></Button>
  );
};

export default ButtonGreen;
