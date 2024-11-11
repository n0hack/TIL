import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const ShowcaseScreen = ({ navigation }) => {
  const onWebMessage = (event) => {
    console.log(event.nativeEvent.data); 
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <WebView 
        style={styles.container}
        source={{ uri: 'http://www.12shop.com:1204' }}
        allowsFullscreenVideo
        textZoom={100} 
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={onWebMessage}
      />
    </SafeAreaView>
  )
}

export default ShowcaseScreen;

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
})