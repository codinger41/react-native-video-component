<h1 align="center">

<p align="center">
  <img src="assets/screenshot.png" height="300px" width="300px" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-video-component"><img src="http://img.shields.io/npm/v/react-native-video-component.svg?style=flat" /></a>
  <a href="https://github.com/leksyib/react-native-video-component/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
</p>


    React Native Video Component (Android/iOS)

If this project has helped you out, please support us with a star 🌟
</h1>
This library is a simple react native video component that saves you the time of building video controls. It also support multiple videos and video captions!


## 📖 Getting started

`$ npm install react-native-video-component --save` <br/>
`$ npm install react-native-video --save` <br/>
`$ react-native link react-native-video` <br/>

## Usage

```javascript
import VideoPlayer from 'react-native-video-component'

const renderPlayer = (props) => {
  return (
    <VideoPlayer
      videos={videos} // use `video` for one video and `videos` if you have an array of videos.
      videoStyle={styles.videoStyle} // Usual style object, video style
      videoContainerStyle={styles.videoContainer} // Usual view style object
      caption={'interesting animal videos'} // Text, can be the description of the video
      captionStyle={styles.captionStyle} // Usual text style object to style the caption
      hideControlsTimeOut={10000} // time (in seconds) it takes before control hides
      // all other props for the <Video/> component
    />
  )
}

```

## ✨ Credits

- Video Component: [react-native-community/react-native-video](https://github.com/react-native-community/react-native-video)

## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/leksyib/react-native-video-component/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.


* If you're feeling especially charitable, please follow [leksyib](https://github.com/leksyib) on GitHub.
* Thanks!
