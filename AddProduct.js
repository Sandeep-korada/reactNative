import React from 'react';
import {Picker,View , Text , TextInput , StyleSheet,ScrollView,Button} from 'react-native';
import { useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';




export default function AddProduct(){
  const navigation=useNavigation();
  const [products, setProducts] = useState({
       id:'',
      productName:'',
      productimage:'',
      productPrice:'',
      productDescription:'',
      productStock:'',
      productCategory:''

  })

  function getProductName(value){
    
    products['productName']=value
    setProducts(products)
}
function getProductPrice(value){
    
    products['productPrice']=value
        setProducts(products)
    
  }
  function getProductDescription(value){
 
    products['productDescription']=value
    setProducts(products)
  
  }
  function getProductStock(value){
    products['productStock']=value
    setProducts(products)
   
  }
  function getProductCategory(value){
    products['productCategory']=value
    setProducts(products)
    
  }
  function getProductimage(value){
    products['productimage']=value
    setProducts(products)
  }
 

const addProduct=()=>{
  const productRequestBody=products
  

console.log(productRequestBody)
 
    axios.post('http://localhost:3000/allproducts',productRequestBody)
          .then(res =>{
            console.log(res.data)
            navigation.navigate('Home')
          },error=>{
            console.log(error)
          }
          )

}

  return (
    <View style={styles.maincontainer}>

    <ScrollView>
    
  <View>
      <TextInput></TextInput>
      <TextInput style={styles.inputproduct} placeholder='Enter Product Name' onChangeText={getProductName} ></TextInput><br></br>
      <TextInput style={styles.inputproduct} placeholder='Enter Image URL' onChangeText={getProductimage} ></TextInput><br></br>
      <TextInput style={styles.inputproduct} placeholder='Enter Product Price' onChangeText={getProductPrice} ></TextInput><br></br>
      <TextInput style={styles.inputproduct} placeholder='Enter Product Description' onChangeText={getProductDescription}></TextInput><br></br>
      <TextInput style={styles.inputproduct} placeholder='Enter Product Stock' onChangeText={getProductStock}></TextInput><br></br>
      <Picker style={styles.inputproduct} placeholder="Enter Category" onValueChange={getProductCategory}>
          <Picker.Item label="Select Category"/>
          <Picker.Item label="Electronics" value="Electronics" />
          <Picker.Item label="Perfumes" value="Perfumes" />
          <Picker.Item label="clothing" value="clothing" />
        </Picker>
  </View>
  
   </ScrollView>
   <Button style={styles.button} onPress ={()=>addProduct()} title="Add Product"></Button>
   </View>
  )
}
const styles = StyleSheet.create({
  maincontainer:{
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    
    

  },
  inputproduct:{
  borderWidth:1,
  borderColor:'blue',
  padding:6,
  margin:8,
  width:300,
  marginLeft: "auto",
  marginRight: "auto",
  

},
button:{
  borderRadius:8,
  paddingVertical:14,
  paddingHorizontal:10,
  backgroundColor:'green',
  marginTop:-50

}

});