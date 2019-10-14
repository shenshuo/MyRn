/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import Colors from './Colors';
const VipHeader = () => (
    <Image
        accessibilityRole={'image'}
        source={require('./images/header.png')}
        style={styles.background}
        >
    </Image>
);

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: 260
    }


});

export default VipHeader;
