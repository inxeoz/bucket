import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
const base =  'https://dit44uotqb.execute-api.ap-south-1.amazonaws.com/default/articles';

const url = 
'https://www.nrigroupindia.com/category/blog/'
const pageNum = 3
import {fetchPost, fetchGet} from './Functional'

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [data, setData] = useState('hiiu');

useEffect ( () => {
const getArt = async () => {
  const data = {url, pageNum};
  const res = await fetchPost({url:base, data});
  console.log(res);
  setData(res);

}

getArt();
  
  

}, []);

  const handleTopPress = () => {
    setShowContent(!showContent);
  };

  const handleTopPress2 = () => {
    setShowContent2(!showContent2);
  };

  const content = [
    'this is content 1',
    'this is content 2',
    'this is content 3',
    'this is content 4',
    'this is content 5',
  ];

  const colors = [
    '#ff7675',
    '#74b9ff',
    '#55efc4',
    '#ffeaa7',
    '#a29bfe',
    '#fd79a8',
    '#00b894',
    '#ffeaa7',
    '#6c5ce7',
    '#fab1a0',
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleTopPress} style={styles.topbar}>
          <Text style={styles.topbarText}>Press me to show content</Text>
        </TouchableOpacity>

        {showContent && (
          <View style={styles.content}>
            {content.map((value, index) => (
              <View
                key={index}
                style={[
                  styles.unitContent,
                  { backgroundColor: colors[index % colors.length] },
                ]}>
                <Text style={styles.contentText}>{value}</Text>
              </View>
            ))}
          </View>
        )}
        <TouchableOpacity onPress={handleTopPress2} style={styles.topbar}>
          <Text style={styles.topbarText}>Press me to show content</Text>
        </TouchableOpacity>

        {showContent2 && (
          <View style={styles.content}>
            {content.map((value, index) => (
              <View
                key={index}
                style={[
                  styles.unitContent,
                  { backgroundColor: colors[index % colors.length] },
                ]}>
                <Text style={styles.contentText}>{value}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
      <Text>
      {data}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  topbar: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFE8C8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbarText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    width: '90%',
  },
  unitContent: {
    height: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 14,
    color: '#333',
  },
});

export default App;
