import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Playlist from '../screens/Playlist';

export const BPMStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Playlist: {
    screen: Playlist,
    navigationOptions: ({ navigation }) => ({
      headerTransparent: true,
    }),
  },
})


//this.props.navigation.navigate('Playlist', { ... })
