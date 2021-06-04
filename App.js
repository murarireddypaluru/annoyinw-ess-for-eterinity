import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import AttendanceScreen from './screens/AttendanceScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  AttendanceScreen:AttendanceScreen
})

const AppContainer = createAppContainer(AppNavigator)

