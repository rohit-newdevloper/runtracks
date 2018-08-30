import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { bpms } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';
import { TitleBar } from '../components/TitleBar';

import { connect } from 'react-redux';
import { watchPersonData } from 'SpotifyBPM/redux/app-redux';

/*const mapStateToProps = (state) => {
  return {
     songData: state.songData
   };
}
const mapDispatchToProps = (dispatch) => {
  return {
    watchSongData: () => dispatch(watchSongData())
  };
}*/

class Home extends Component {
  handleRowPress = (item, index) => {
    this.props.navigation.navigate('Playlist', item, index);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <TitleBar
          //style={{ flex: 2, }}
        />
        <FlatList
          style={{ flex: 3, }}
          data={bpms}
          keyExtractor={(item) => item.bpm}
          renderItem={({ item, index }) =>
            <ListItem
              info={item} index={index} onPress={() => this.handleRowPress(item, index)}
            />
          }
        />
      </View>
    );
  }
}
export default Home;
//export default connect(mapStateToProps, mapDispatchToProps)(Home);
