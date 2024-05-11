

import React, { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { setUpPlayer,addTrack } from '../musicPlayerService';
import MusicPlayer from './screens/MusicPlayer';


function App(): React.JSX.Element {
  const [isPlayerReady,setIsPlayerReady]= useState(false);

async function setup(){
  var isSetup = await setUpPlayer();
  if(isSetup){
    await addTrack();
  }
  setIsPlayerReady(isSetup);
}

useEffect(()=>{
   setup()
},[])

if(!isPlayerReady){
  return (
    <SafeAreaView>
      <ActivityIndicator/>
    </SafeAreaView>
  )
}

  return (
    <SafeAreaView>
      <View style={styles.container}>
          <MusicPlayer/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container:{
  flex:1,
 }
});

export default App;
