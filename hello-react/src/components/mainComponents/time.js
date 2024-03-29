import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = { currentTime: null, currentDay: null }
    this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  }

  componentWillMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour === 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });
// eslint-disable-next-line 
    this.daysArray.map((item, key) => {
      if (key === new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {

    return (
        <View>
          <Text style={styles.daysText}>{this.state.currentDay}</Text>
          <Text style={styles.timeText}>{this.state.currentTime}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    // container: {
    //   flex: 1,
    //   paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // headerText: {
    //   fontSize: 30,
    //   textAlign: "center",
    //   margin: 10,
    //   color: 'black',
    //   fontWeight: "bold"
    // },
    timeText: {
      fontSize: 130,
      color: '#fff'
    },
    daysText: {
      color: '#fff',
      fontSize: 30,
      paddingBottom: 0
    }

  });