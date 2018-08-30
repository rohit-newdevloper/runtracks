import React from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../config/colors';

let rowColors = ['#A975FA', '#00c4ff', '#08f472', '#fbe601', '#FF7D59'];

const ListItem = ({ info, index, onPress }) => {
  const rowStyle = [
    {
    flexDirection: 'row',
    //alignContent: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 34,
    marginVertical: 7,
    marginHorizontal: 16,
    //backgroundColor: '#9f68f6',
    backgroundColor: rowColors[index % rowColors.length],
    borderRadius: 10,
    }
  ];

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >
      <View style={rowStyle}>
        <Text style={styles.bpm}>{info.bpm}</Text>
      </View>
    </TouchableHighlight>
  )
};

export default ListItem;
