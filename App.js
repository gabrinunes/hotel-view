import React from 'react'
import {Text,StyleSheet,ScrollView} from 'react-native'
import {colors} from './styles'

import Hotel from './screens/HotelView'

export default function App(){
  return(
    <ScrollView style={styles.container}>
      <Hotel/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.darkBg
  }
})