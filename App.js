/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import VipHeader from './mHeader'
import img_arr from './img_arr'
import     Colors from './Colors'
import VipTitle from './VipChildTitle'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';



const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <VipHeader/>
                    {/*{(global.HermesInternal=1) == null ? null : (*/}
                    {/*  <View style={styles.engine}>*/}
                    {/*    <Text style={styles.footer}>Engine: Hermes</Text>*/}
                    {/*  </View>*/}
                    {/*)}*/}
                    <Image source={img_arr['png2']}
                           style={styles.imagePay}/>
                    <View style={styles.body}>

                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <VipTitle
                                title={'速成课程'}
                                image={'1'}
                            />
                            {/*<Image source={img_arr['image_title1']} style={{width: 32, height: 26}}/>*/}
                            {/*<Text style={{fontSize:19,color:Colors.brown,marginLeft:4}}>速成课程</Text>*/}
                            <Text style={{fontSize:14,color:Colors.brown2,marginLeft:20}}>快速过考</Text>
                        </View>
                        <VipTitle
                            title={'秒懂技巧'}
                            image={'2'}
                        />
                        <VipTitle
                            title={'增值权益'}
                            image={'3'}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.white,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
        marginLeft: 16
    },
    imagePay: {
        width: "100%",
        height: 90,
        marginLeft: 12
    },
    rowView: {
        flex: 1,
        flexDirection: 'row'
    },

    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '400',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
