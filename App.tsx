/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View

} from 'react-native';
import { Animated, Image } from "react-native";
import BootSplash from "react-native-bootsplash";

type Props = {
  onAnimationEnd: () => void;
};

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const AnimatedBootSplash = ({ onAnimationEnd }: Props) => {
  
  const ref = useRef(new Animated.Value(0)).current

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     Animated.timing(ref,{
  //       toValue:1,
  //       duration:1000,
  //       useNativeDriver:false
  //     }).start(()=>{
  //       onAnimationEnd()
  //     })
  //   },500)
   
  // },[])

  const transInterPolate = ref.interpolate({
    inputRange:[0,1],
    outputRange:[0,500],
    extrapolate:"clamp"
  })

  const transStyle = {transform:[{translateY:transInterPolate}]}





  return (
    <LottieView style={{flex:1,backgroundColor:"#000000"}} 
    source={require('./lotties/netflix.json')} 
    onAnimationFinish={()=>onAnimationEnd()} 
    autoPlay  
    loop={false}
    />
  //   <View style={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:"#ffffff"}}>
  //  <Animated.View style={[,transStyle,]}>
  //   <Image source={require("./assets/bootsplash_logo.png")} />
  //  </Animated.View>
  //  </View>
  );
}



function App(): React.JSX.Element {
  const [splashAnimationVisible,setSplashAnimationVisisble] = useState(true)

  
useEffect(()=>{
  BootSplash.hide()
},[])




  return (
    <SafeAreaView style={{flex:1}}>
      {splashAnimationVisible ? 
      <>
      <AnimatedBootSplash onAnimationEnd={()=>setSplashAnimationVisisble(false)}/>
      </>:
      <>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20,color:"black"}} >Hi Splash</Text>
      </View>
      </>}
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
