import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import { Provider } from 'react-native-paper';

// const theme = {
//     colors: {
//         myOwnColor: '#FF7A38',
//     },
// };

export default function Main() {
    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => Main);
