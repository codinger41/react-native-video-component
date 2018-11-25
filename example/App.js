import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import VideoPlayer from './videoplayer'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const videos = [
  require('./video.mp4'),
  require('./vid.mov'),
  require('./video.mp4'),
  require('./vid.mov'),
  require('./video.mp4'),
  require('./vid.mov')
]

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      muted: false,
      paused: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer 
          videos={videos}
          videoContainerStyle={styles.videoContainer}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
  videoContainer: {
    height: screenHeight * 0.4,
    width: screenWidth,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  video: {
    height: screenHeight * 0.4,
    width: screenWidth,
  },
  pause: {
    position: 'absolute'
  },
  muted: {
    position: 'absolute',
    right: 3,
    top: 7
  },
  muted2: {
    position: 'absolute',
    right: 3,
    top: 7
  },
  mutedButton: {
    height: 20,
    width: 20
  },
  mutedButton2: {
    height: 20,
    width: 20
  },
  playButton: {
    width: 50,
    height: 50
  }
});
