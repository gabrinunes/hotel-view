import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Ionicicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import {gs,colors} from '../../../styles'
import {Text,View,StyleSheet} from 'react-native'
export default function Amenities(){

    return(
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Amenities</Text>

            <View style={styles.amenitesContainer}>
              <View style={styles.amenityContainer}>
                  <View style={styles.amenity}>
                      <Feather name ="wifi" size={24} color={colors.lightHl}/>
                  </View>
                  <Text style={styles.amenityName}>WI-FI</Text>
              </View>

              <View style={styles.amenityContainer}>
                  <View style={styles.amenity}>
                      <Ionicicons name ="md-restaurant" size={24} color={colors.lightHl}/>
                  </View>
                  <Text style={styles.amenityName}>Hotel Restaurant</Text>
              </View>

              <View style={styles.amenityContainer}>
                  <View style={styles.amenity}>
                      <FontAwesome5 name ="swimmer" size={24} color={colors.lightHl}/>
                  </View>
                  <Text style={styles.amenityName}>Swimming Pools</Text>
              </View>

              <View style={styles.amenityContainer}>
                  <View style={styles.amenity}>
                      <Entypo name ="drink" size={24} color={colors.lightHl}/>
                  </View>
                  <Text style={styles.amenityName}>Bar</Text>
              </View>

              <View style={styles.amenityContainer}>
                  <View style={styles.amenity}>
                      <Ionicicons name ="ios-car" size={24} color={colors.lightHl}/>
                  </View>
                  <Text style={styles.amenityName}>Parking Spot</Text>
              </View>

              <View style={styles.amenityContainer}>
                  <View style={styles.amenity}>
                      <Feather name ="speaker" size={24} color={colors.lightHl}/>
                  </View>
                  <Text style={styles.amenityName}>Night Club</Text>
              </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    amenitesContainer:{
        marginTop:16,
        marginHorizontal:16,
        ...gs.rowBetwenn,
        flexWrap:'wrap'
    },
    amenityContainer:{
        alignItems:'center',
        width:95,
        marginVertical:12
    },
    amenity:{
        width:48,
        height:48,
        borderRadius:58/2,
        ...gs.center,
        backgroundColor:'#444'
    },
    amenityName:{
        color:colors.lightHl,
        fontSize:12,
        fontWeight:"600",
        marginTop:5,
    }
})