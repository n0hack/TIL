import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const ChargeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrap}>
      <WebView 
        style={styles.container}
        source={{ uri: 'http://www.12shop.com:1206' }}
        allowsFullscreenVideo
        textZoom={100} 
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  )
}

export default ChargeScreen;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  }
});
