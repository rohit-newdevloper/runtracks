import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  row: {
    flexDirection: 'column',
    //alignContent: 'center',
    //justifyContent: 'center',
    //alignItems: '',
    paddingHorizontal: 20,
    paddingVertical: 6,
    //marginVertical: 7,
    //marginHorizontal: 16,
    //backgroundColor: rowColors[index % rowColors.length],
  },
  track: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '400',
    color: '#3D3D3D',
  },
  artist: {
    fontFamily: 'Avenir',
    fontSize: 13,
    fontWeight: '400',
    color: '#7A7A7A',
  },
});
