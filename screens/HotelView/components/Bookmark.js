import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import {gs,colors} from '../../../styles'
export default function Bookmark(){
    return(
        <View style={styles.bookmark}>
           <Feather name="bookmark" size={24} color={colors.pink}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bookmark:{
        position:'relative',
        width: 56,
        height: 56,
        left:280,
        top: -56/2,
        zIndex:10,
        ...gs.center,
        backgroundColor:colors.text,
        borderRadius: 56/2,
      
    }
})