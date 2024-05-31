import React, { useState, useLayoutEffect , useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import SvgUri from 'react-native-svg-uri';
import { state } from '../Global';

const App = ({ navigation }) => {

  const [feesUrl, setFeesUrl] = useState(
    'https://103.134.248.123/ERP/student/Student/studentdue'
  );

  return (
    <View style={styles.container}>
      <View style={styles.body}>
       <WebView
          source={{
            uri: feesUrl,
          }}
          headers={{
            Cookie: state.cookies,
          }}
          allowUniversalAccessFromFileURLs={true}
          javaScriptEnabled={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});

export default App;