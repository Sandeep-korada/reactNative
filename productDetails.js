import React from 'react';
import {ScrollView, TouchableOpacity } from 'react-native';
import { useState,useEffect} from 'react';
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

export default function productDetails(sandeep){
  const about=sandeep.route.params.item
    const [product, setProducts] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3000/allproducts/'+about)
            .then(res =>{
              console.log(res.data)
              setProducts(res.data)
            })
    }) 
    return (
        <View style={styles.container}>
            
        <ScrollView>{
     
          <View>
           
        <Text style={styles.list}><img src={product.productimage} style={{height:'200px'}}></img></Text>
        <Text style={styles.list}> Name: {product.productName}</Text><br></br>
        <Text style={styles.list}> Price:{product.productPrice}</Text><br></br>
        <Text style={styles.list}>Description:{product.productDescription}</Text><br></br>
        <Text style={styles.list}> Stock: {product.productStock}</Text><br></br>
        <Text style={styles.list}>Category: {product.productCategory}</Text>
        
          </View>
        
      
      }
    </ScrollView>

      <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
       borderRadius:6,
       elevation:3,
       shadowOffset:{width:1,height:1},
       shadowColor:'#333',
       marginHorizontal:1,
       marginVertical:1

        
    },
    list:{
      marginTop:20,
      fontSize:20, 
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor:'whitesmoke',

      
    },
   
})