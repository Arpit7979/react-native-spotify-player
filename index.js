/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import { playBackService } from './musicPlayerService';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playBackService);