import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet,
  NativeModules,
  requireNativeComponent,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyMapView from './MyMapView.js';
var CalendarManager = NativeModules.CalendarManager;
// var RNTMap = requireNativeComponent('RNTMap',null);


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  _onPressButton() {
    console.log("You tapped the button")
    console.log(CalendarManager.firstDayOfTheWeek)
    var date = new Date();
    var time = date.getTime();
    CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', time); // 把日期以unix时间戳形式传递
    CalendarManager.testDic({
      name:"wxssssssssss",
      age:"18",
    });
    CalendarManager.findEvents((error,events)=> {
      if(error) {
        console.error(error)
      } else {
        console.log(events)
      }
    });
  }


  render() {
    return (
      // <View>
        // <TouchableHighlight onPress={this._onPressButton}>
        //   <Text>
        //     Hello , Chat App
        //   </Text>
        // </TouchableHighlight>
        //
        // <Button onPress={() => this.props.navigation.navigate('Chat')}
        //   title="Chat"/>
        <MyMapView pitchEnabled={true}/>

      // </View>
    );
  }
}

class MyButton extends React.Component {
    render() {
        return (
            <View ref={(c) => this._refButton = c} style={styles.button}
             onTouchStart={(e) => this._onTouchStart(e)}
             onTouchEnd={(e) => this._onTouchEnd(e)}
             >
                <Text style={styles.text}>{this.props.children}</Text>
            </View>

        );
    }

    _onTouchStart(e) {
        /**
         * 这里直接操作style以达到效果
         * @type {Object}
         */
        this._refButton.setNativeProps({
            style: {backgroundColor: '#666'}
        });
    }

    _onTouchEnd() {
        this._refButton.setNativeProps({
            style: {backgroundColor: '#999'}
        });
    }
}

class ChatScreen extends React.Component {
  static navigationOptions= {
    title:'Chat',
    headerMode: 'screen',
    mode: 'card'
  }
  componentDidMount() {
    this.timer = setTimeout(
      ()=>{console.log('wxssssssssss')},
      500
    )

    requestAnimationFrame(()=>{
      console.log('111111111')
    })
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }

  render(){
    return(
      <View>
        <MyButton children="123"/>
        <Text>Chat View</Text>
      </View>
    )
  }
}



const SalesRN = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

const styles = StyleSheet.create({
  button:{
    backgroundColor:'blue',
    height:50,
    width:100,
  },
  text:{
    color:'black',
    fontSize:30
  },
});

AppRegistry.registerComponent('SalesRN', () => SalesRN);
