import React, { Component } from 'react';
import { View, Text, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../config/colors';
import colors from '../../config/colors';

let rowColors = ['#A975FA', '#00c4ff', '#08f472', '#fbe601', '#FF7D59'];

/*const Header = (rowFromParent) => {
  var wtf = this.props.rowFromParent;
  console.warn(wtf);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>100 bpm</Text>
    </View>
  )
};*/

class Header extends Component {
  render() {
    let row = this.props.rowFromParent;
    if (row == "100 bpm") { var index = 0; }
    if (row == "110 bpm") { var index = 1; }
    if (row == "120 bpm") { var index = 2; }
    if (row == "130 bpm") { var index = 3; }
    if (row == "140 bpm") { var index = 4; }
    if (row == "150 bpm") { var index = 5; }
    if (row == "160 bpm") { var index = 6; }
    if (row == "170 bpm") { var index = 7; }
    if (row == "180 bpm") { var index = 8; }
    if (row == "190 bpm") { var index = 9; }
    if (row == "200 bpm") { var index = 10; }
    //else { var index = 0; }

    const containerStyle = [
      {
        width: 380,
        height: 90,
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: rowColors[index % rowColors.length],
      }
    ];

    return (
      <View style={containerStyle}>
        <Text style={styles.title}>{this.props.rowFromParent}</Text>
      </View>
    )
  }
}

Header.propTypes = {
  rowFromParent: PropTypes.string
};

export default Header;
