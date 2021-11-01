import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
 

likePressed(){
  var like= db.ref('Rating/' + '/')
  like.update({
    'likePressed':1
  })
}

  render() {
    return (
      <View style={styles.buttonsContainer}>
        <AppHeader />

        <TouchableOpacity
         style={styles.button}
         onPress= {()=>this.props.navigation.navigate('BuzzerScreen')} >
        <Text style={styles.buttonText}>Read a joke </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress= {()=>this.props.navigation.navigate('Horoscope')} >
          <Text style={styles.buttonText}>Horoscope </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
         onPress= {()=>this.props.navigation.navigate('WeatherScreen')} >
          <Text style={styles.buttonText}> Weather </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress= {()=>this.props.navigation.navigate('NewScreen')} >
          <Text style={styles.buttonText}> Top News </Text> 
        </TouchableOpacity>
          <Text>Rate Our News Letter</Text>
        <TouchableOpacity onPress ={this.likePressed}>
          <Image style = {styles.image2} source={require('../assets/thumbsup.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.dislikePressed}>
          <Image style = {styles.image1} source={require('../assets/thumbsdown.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
textStyle: {
    fontSize: 19.7
  },
  image1: {
    width: 50,
    height: 50,
    marginTop: -35,
    marginLeft: 160
  },
  image2: {
    width: 50,
    height: 50,
    marginTop: 35,
    marginLeft: 100
  }
});