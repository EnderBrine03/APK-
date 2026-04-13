import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Üst barın sitenin koyu temasıyla uyumlu olması için */}
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0f" />
      
      <WebView 
        originWhitelist={['*']}
        // Android'de dosyalar assets klasöründen, iOS'ta ana dizinden okunur
        source={Platform.OS === 'android' 
          ? { uri: 'file:///android_asset/index.html' } 
          : require('./assets/index.html')}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        mixedContentMode="always"
        mediaPlaybackRequiresUserAction={false} // Müzik loopları için kritik
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
  },
  webview: {
    flex: 1,
    backgroundColor: '#0a0a0f',
  },
});
