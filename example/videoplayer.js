import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class VideoPlayer extends Component {
  constructor(props){
    super(props)
    this.state = {
      muted: props.muted,
      paused: props.paused,
      videos: props.videos
    }
  }
  renderMuteButton(){
    if(this.state.muted){
      return (
        <TouchableOpacity
          style={styles.muted}
          activeOpacity={0.7}
          onPress={() => this.setState({ muted: false })}
        >
          <Image
            source={require('./assets/muted.png')}
            style={styles.mutedButton}
          />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.muted2}
        activeOpacity={0.7}
        onPress={() => this.setState({ muted: true })}
      >
        <Image
          source={require('./assets/speaker.png')}
          style={styles.mutedButton2}
        />
      </TouchableOpacity>
    )
  }
  renderPauseButton(){
    if(this.state.paused){
      return (
        <TouchableOpacity
          style={styles.pause}
          activeOpacity={0.7}
          onPress={() => this.setState({ paused: false })}
        >
          <Image 
            source={require('./assets/play.png')}
            style={styles.playButton}
          />
        </TouchableOpacity>
      )
    }else return (
      <TouchableOpacity
        style={styles.pause}
        activeOpacity={0.7}
        onPress={() => this.setState({ paused: true })}
      >
        <Image
          source={require('./assets/pause.png')}
        />
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback 
          onPress={() => {
            this.setState({ muted: !this.state.muted })
          }}
        >
          <View
            style={this.props.videoContainerStyle ? this.props.videoContainerStyle : styles.videoContainer}
          >
            <Video
              source={this.props.video ? this.props.video : null}
              style={this.props.videoStyle ? this.props.videoStyle : styles.video}
              paused={this.state.paused}
              muted={this.state.muted}
              {...this.props}
            />
            {this.renderPauseButton()}
            {this.renderMuteButton()}
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

VideoPlayer.propTypes = {
  video: PropTypes.any,
  videoStyle: PropTypes.object,
  videos: PropTypes.array
}

const styles = StyleSheet.create({
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
})


export default VideoPlayer
