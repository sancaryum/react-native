//imports
import React from 'react';
import {Text, View} from 'React-Native';
import Header from './src/components/Header';

//components
const Header = ({HeaderText}) => {
    const{ textStyle, viewStyle } = style; 
    return(
        <View style{viewStyle}>
            <Text style={textStyle}>{props.HeaderText}</Text>

        </View>
        
    )

};

const styles = {
    textStyle: {
        fontSize:20
    },
    viewStyle:{
        backgroundColor: 'red',
        height:60,
        justifyContent: 'center',
        alignItems:'center',
        marginTop:15,
        shadowOffset:{widht: 0,height:2},
        shadowOpacity: 0.2,

    }
};

export default Header;


