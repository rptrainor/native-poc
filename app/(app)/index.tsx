import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html: '<div><h1><center>Hello world</center></h1><ul><li><a href="https://www.google.com">https://www.google.com</a></li><li><a href="https://app.ofcolor.com">https://app.ofcolor.com</a></li></ul></div>' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
