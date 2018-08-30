import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    //flex: 1,
    //flexDirection: 'column',
    width: 380,
    height: 260,
    alignItems: 'center',
    marginBottom: 5,
  },
  bar: {
    position: 'absolute',
    width: 380,
    height: 260,
    flexDirection: 'column',
    //alignContent: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8924f0',
    //paddingHorizontal: 12,
    paddingTop: 60,
    //marginBottom: 10,
    //marginHorizontal: 16,
  },
  title: {
    fontFamily: 'Avenir Next',
    fontSize: 30,
    fontWeight: '500',
    color: colors.primaryText,
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '300',
    color: colors.primaryText,
    //justifyContent: 'center',
  },
  pic: {
    position: 'absolute',
    height: 260,
    width: 380,
    //resizeMode: 'cover',
    //marginTop: 20,
  },
});
