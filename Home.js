import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button,TextInput } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



export default function Home(state) {

  
 const navigation=useNavigation();
  
  const [allproducts, setProducts] = useState([])
  const [permanentUsers,setPermanentUsers]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/allproducts')
          .then(res =>{
            console.log(res.data)
            setProducts(res.data)
            setPermanentUsers(res.data)
          })
  },[]) 
  function getSearch(event){
    let products =permanentUsers.filter((fproduct)=>{
      return fproduct.productName.toLowerCase().includes(event.toLowerCase())
    })
    setProducts(products)
  }
  return (
    <View style={styles.container}>
<View>
<Button title="Add Product"  onPress={()=>navigation.navigate('AddProduct')}
/></View>
<TextInput onChangeText={getSearch} placeholder="Search Here" style={styles.searchBar} />

        <ScrollView>{
          
      allproducts.map(product=>{
        return(
          <View key={product.id}>
            <TouchableOpacity onPress={()=>{navigation.navigate('productDetails',{item: product.id})}}>
        <Text style={styles.list}><img src={product.productimage} style={{height:'300px'}}></img>  <h3> {product.productName}</h3></Text>
            </TouchableOpacity>
          </View>
        )
      })
      }
      
    </ScrollView>
    <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'pink',
    
  
  },
  list:{
    marginTop:20,
    fontSize:40,
    backgroundColor:'whitesmoke',
    color:'blue',
    marginLeft: "auto",
    marginRight: "auto",
 
    },
    searchBar: {
      fontSize: 24,
      margin: 10,
      width: '90%',
      height: 50,
      backgroundColor: 'whitesmoke',
    },
   
});
