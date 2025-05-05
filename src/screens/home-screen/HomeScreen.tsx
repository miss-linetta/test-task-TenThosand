import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { getPosts } from '../../api/posts/postAPI.ts';
import { Post } from '../../api/posts/types';
import { RootState } from '../../store';
import { styles } from './HomeScreen.styles.ts';
import { PostCard } from './components/post-card/PostCard';
import { StepCard } from './components/step-card/StepCard';
import LinkIcon from '../../assets/link.png';
import Arrow from '../../assets/arrow-right.png';

export const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerLabel}>Your name</Text>
        <Text style={styles.headerName}>{user?.name ?? 'User'}</Text>
      </View>

      <View style={styles.mainSection}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Test task</Text>
          <Text style={styles.cardSubtitle}>Lorem ipsum</Text>
          <Text style={styles.cardLink}>Go to call →</Text>
        </View>

        <Text style={styles.sectionTitle}>Before you Start</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.stepsRow}
        >
          <View style={styles.stepsRow}>
            <StepCard
              title={`Lorem ipsum\nlorem ipsum`}
              steps="2 steps →"
              backgroundColor="#4A4A4A"
              textColor="#FFFFFF"
              icon={Arrow}
            />
            <StepCard
              title={`Lorem ipsum\nlorem ipsum`}
              steps="3 steps"
              backgroundColor="#E66767"
              textColor="#FFFFFF"
              icon={LinkIcon}
            />
          </View>
        </ScrollView>

        <Text style={styles.sectionTitle}>Posts</Text>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </View>
    </ScrollView>
  );
};
