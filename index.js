/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './gesture-handler';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // Ignore all log notifications
AppRegistry.registerComponent(appName, () => App);
