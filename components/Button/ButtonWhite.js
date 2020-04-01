import React from 'react';

import { Button, Text } from 'native-base';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLOR_PRIMARY } from '../../utils/Color';

const ButtonWhite = (props) => {
  return (
    <Button rounded style={{
      width: "80%",
      height: hp("8"),
      backgroundColor: "rgba(255,255,255,1)",
      justifyContent: "center",
      top: props.top
    }} onPress={props.onPress}><Text style={{color: COLOR_PRIMARY,fontWeight: "bold", fontSize: 20}}>{props.name}</Text></Button>
  );
};
export default ButtonWhite;
