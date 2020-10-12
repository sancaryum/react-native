//kendi importlarımızı yazıyoruz
import React from "react";
import ReactNative from "react-native";
import {Text, AppRegistry} from "react-native";


//kendi componentlerimizi yazıyourz
const App= () => (
        <Text>Hello World!</Text>

);

//kodlarımızı render ettiğimiz yer
AppRegistry.registerComponent('ornekproje1', () => App);
