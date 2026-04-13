import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebView 
        source={require('./assets/index.html')} 
        style={{ flex: 1 }}
        originWhitelist={['*']}
        allowFileAccess={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
