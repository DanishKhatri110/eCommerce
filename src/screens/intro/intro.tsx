import { StyleSheet, Text, View, SafeAreaView, Platform, TextInput, Dimensions, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import type {PropsWithChildren} from 'react';
// import CarouselCards from './carousel/carouselCards';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import Images from '../../assets/images/Index';
import Icon from 'react-native-vector-icons/Ionicons';
import SCREENS from '..';
import { COLORS, FONTS } from '../../constants';
// import RelativeLayout from './android/app/src/main/res/layout/launch_screen';


const intro = props => {
  const { navigation } = props;
  const _carousel = useRef();
  const [dotIndex, setDotIndex] = useState(0);
  const data = [
    { id: 1, title: "Danish", image: Images.Danish, description: 'Danish want some Products' },
    { id: 2, title: "Daniyal", image: Images.Daniyal, description: 'Daniyal is search something' },
    { id: 3, title: "Saleh", image: Images.Saleh, description: "Saleh is get some grocery for kitchen" },
  ];
  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item.image}
          style={{
            height: Dimensions.get("window").width,
            width: Dimensions.get("window").width,
          }} />


        <View style={styles.textView}>
          
          <Text style={styles.maintext}>{item.title}</Text>
          <Text style={styles.maintext1}>{item.description}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={{ fontFamily: 'MontserratRegular' }}>Danish</Text>
      <View style={styles.buttonView}>
        <Button title="Skip" onPress={() => {
          navigation.navigate(SCREENS.SIGNUP)
        }}/>
      </View>
      <Carousel
        ref={_carousel}
        data={data}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        onSnapToItem={index => setDotIndex(index)} />
      <View style={styles.pagyView}>
        <Pagination
          carouselRef={_carousel}
          activeDotIndex={dotIndex}
          dotsLength={3}
          dotStyle={{
            height: 10,
            width: 10,
            marginHorizontal: 0,
            backgroundColor: 'orange'
          }}
          inactiveDotStyle={{
            height: 10,
            width: 10,
            marginHorizontal: 0,
            backgroundColor: 'gray'
          }}
          inactiveDotOpacity={2}
          inactiveDotScale={2}
          tappableDots={true} />
        <View style={styles.npButtonView}>
          <TouchableOpacity onPress={() => {
            _carousel.current.snapToItem(dotIndex - 1);
          } }>
            <View style={styles.previousButtonView}>
              <Icon name="arrow-back" size={30} color="#000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            _carousel.current.snapToItem(dotIndex + 1);
          } }>
            <View style={styles.nextButtonView}>
              <Icon name="arrow-forward" size={30} color="#000" />
            </View>
          </TouchableOpacity>                
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    safeArea:{
    flex: 1,
    justifyContent: "space-between",
  },
  maintext: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'MontserratBold',
  },
  textView: {
    padding: 10,
  },
  maintext1: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: FONTS.MONTSERRAT,
  },
  buttonView: {
    alignItems: 'flex-end',
    padding: 15,
  },
  pagyView: {
    flexDirection: "row",
    justifyContent:"space-between",
  },
  previousButtonView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "lightgray",
    marginEnd: 10,
    justifyContent: "center",
    alignItems:"center",
  },
  nextButtonView: {
    alignItems:"center",
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "orange",
    justifyContent: "center",
  },
  npButtonView: {
    padding: 15,
    flexDirection: "row",
  },
});

export default intro