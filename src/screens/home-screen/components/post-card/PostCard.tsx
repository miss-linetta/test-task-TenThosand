import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './PostCard.styles.ts';
import { PostCardProps } from './types';

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <View style={styles.postCard}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postBody}>{post.body}</Text>
    </View>
  );
};
