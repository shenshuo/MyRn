import React, {Component,} from 'react'
import {Image, Text, View} from "react-native";
import img_arr from "./img_arr";
import Colors from "./Colors";
const PropTypes = require('prop-types');
export default class VipTitle extends Component {
    static propTypes = {    //接收以下六个参数：
        title: PropTypes.string,       //标题文字
        image:PropTypes.string, //标题图片
    }
    render() {
        return (
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Image source={img_arr['image_title'+this.props.image]} style={{width: 32, height: 26}}/>
                <Text style={{fontSize:19,color:Colors.brown,marginLeft:4}}>{this.props.title}</Text>
            </View>

        )
    }
}
