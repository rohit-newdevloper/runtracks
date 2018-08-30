import React from 'react';
import { View, Text, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../config/colors';

const remote = 'https://i.imgur.com/x8ZStao.jpg';

const TitleBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Image
          source={{ uri: remote }}
          style={styles.pic}
        />
        <Text style={styles.title}>runtracks</Text>
        <Text style={styles.subtitle}>music tracks for hittin' the track</Text>
      </View>
    </View>
  )
};

export default TitleBar;
