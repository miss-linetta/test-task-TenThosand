import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './SearchScreen.styles';
import { getPosts } from '../../api/posts/postAPI.ts';
import { Post } from '../../api/posts/types';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredData = posts.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.item}>
      <Text style={styles.id}>ID: {item.id}</Text>
      <Text style={styles.name}>Name: {item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search</Text>
      <View style={styles.searchWrapper}>
        <Image
          source={require('../../assets/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default SearchScreen;
