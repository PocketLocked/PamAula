import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import AppLoading from 'expo-app-loading';
 
import axios from 'axios';
 
export default function App() {
  const [image, setImage] = useState();
 
  useEffect(() => {
    async function getData() {
      const response = await axios.get('https://aws.random.cat/meow');
      console.log(response.data.file);
      setImage(response.data.file);
    }
 
    getData();
  }, []);
 
  return (
    <View style={styles.container}>
      {!image && <AppLoading />}
      <Image source={{uri: `${image}`}} style={{width: 300, height: 300}} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
});