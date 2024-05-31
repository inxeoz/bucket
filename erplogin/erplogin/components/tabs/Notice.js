import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { fetchData } from '../Functional';
import Notice from './NoticeUnit'; // Assuming you have defined the Notice component in NoticeUnit.js
const base_url =
  'https://w4bg0ee1f8.execute-api.ap-south-1.amazonaws.com/default/notice';
const CircularNotice = ({ notices }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [parsedNotices, setParsedNotices] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await fetchData(base_url);
      const noticesData = await JSON.parse(res.trim());
      setParsedNotices(noticesData);
      setFilteredNotices(noticesData);
      console.log(noticesData);
    };
    get();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = parsedNotices.filter((elements) =>
      elements.notice.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredNotices(filtered);
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search notices"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <ScrollView>
        <FlatList
          data={filteredNotices}
          renderItem={({ item }) => <Notice notice={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

export default CircularNotice;
