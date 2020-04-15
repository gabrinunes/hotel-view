import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

import AntDesing from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import {gs} from '../../../styles'

export default function Header() {
  
    return (
      <View>
        <Image source={require("../../../assets/hotel.jpg")} style={{width:"100%",height:400}}/>
         
         <View style={styles.topButtons}>
         <AntDesing name="close" size={24} color="#fff"/>

         <View style={gs.rowCenter}>
            <AntDesing name="save" size={24} style={styles.topButtonRight}/>
            <AntDesing name="sharealt" size={24} style={styles.topButtonRight}/>
            <Entypo name ="dots-three-vertical" size={18} style={styles.topButtonRight}/>
         </View>
      </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  topButtons:{
    ...gs.rowBetwenn,
    position:'absolute',
    top:24,
    left:32,
    right:32
  },
  topButtonRight:{
    marginLeft:12,
    color:'#fff'
  }
})
