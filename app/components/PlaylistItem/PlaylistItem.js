import React from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../config/colors';

//const PlaylistItem = { info, index } => {
const PlaylistItem = input => {
  var info = input.info;
  var index = input.index;
  var name = info.songName;
  var artist = info.artist;
  //var sortName = name.sort();
  return (
    <View style={styles.row}>
      <Text style={styles.track}>{name}</Text>
      <Text style={styles.artist}>{info.artist}</Text>
    </View>
  )
};

export default PlaylistItem;
