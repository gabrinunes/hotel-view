import {StyleSheet} from 'react-native'

export const colors ={
    darkBg:"#222",
    lightBg:"#333",
    darkHl:"#666",
    lightHl:"#888",
    pink:"#ea3372",
    text:"#fff",
    textSec:"#aaa"
}

export const gs = StyleSheet.create({
    rowCenter:{
      flexDirection:'row',
      alignItems:'center'
    },
    sectionContainer:{
        paddingHorizontal:32,
        paddingVertical:24,
        marginBottom:8,
        backgroundColor: colors.lightBg
    },
    rowBetwenn:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
     color: colors.text,
     fontSize:30
    },
    divider:{
        borderBottomColor:'#444',
        borderBottomWidth:1,
        marginVertical:24
    },
    sectionTitle:{
      fontWeight:'700',
      color:colors.text,
      fontSize:15
    }
})