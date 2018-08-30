import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';
import { PlaylistItem } from '../components/PlaylistItem';
import colors from '../config/colors';

import { TitleBar } from '../components/TitleBar';
import { Header } from '../components/Header';

import { db } from '../config/db';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  }
})

class Playlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
       item: []
    }
 };

  componentDidMount() {
    const whichRow = this.props.navigation.state.params.bpm;
    var selectedBpm = parseInt(whichRow.substr(0, 3));
    var bpmRange = selectedBpm + 5;
    let itemsRef = db.ref('/');

    itemsRef.orderByChild('roundedBPM').startAt(selectedBpm).endAt(bpmRange).once('value', (snapshot) => {
      var data = snapshot.val();
      let item = Object.values(data);
      this.setState({item});
    });
}

    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            //width: "100%",
            backgroundColor: "#E6E6E6",
            marginLeft: "5%",
            marginRight: "5%"
          }}
        />
      );
    };

    render() {
    const rowSelect = this.props.navigation.state.params.bpm;
    var dataArr = this.state.item;

    dataArr.sort(function(a, b) {
      if(a.songName < b.songName) return -1;
      if(a.songName > b.songName) return 1;
      return 0;
    })

      return (
       <View style={styles.container}>
         <Header rowFromParent={rowSelect}/>
         <FlatList
           //style={{ flex: 3, }}
           data={dataArr}
           renderItem={({ item, index }) =>
             <PlaylistItem
               info={item} index={index}
             />
           }
           keyExtractor={(item) => item.ID}
           ItemSeparatorComponent={this.renderSeparator}
         />
       </View>
   );
  }
}
export default Playlist;
//export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
