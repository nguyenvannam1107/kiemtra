// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatCard from './StatCard';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header với ảnh avatar + tên người dùng */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.userName}>Nguyễn Văn Nam</Text>
        </View>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pravatar.cc/150?img=47' }}
        />
      </View>

      <Text style={styles.sectionTitle}>Your Insights</Text>

      {/* Khu vực thống kê 4 ô */}
      <View style={styles.statsRow}>
        <StatCard
          onPress={() => navigation.navigate('Scan')}
          title='Scan new'
          value='Scanned 483'
          icon={<Ionicons name='scan-outline' size={20} color='#333' />}
          color='#e5f1ff'
        />
        <StatCard
          title='Counterfeits'
          value='Counterfeited 32'
          icon={<Ionicons name='alert-circle-outline' size={20} color='#333' />}
          color='#ffe5e5'
        />
      </View>

      <View style={styles.statsRow}>
        <StatCard
          title='Success'
          value='Checkouts 8'
          icon={<Ionicons name='checkmark-circle-outline' size={20} color='#333' />}
          color='#e5fff1'
        />
        <StatCard
          title='Directory'
          value='History 26'
          icon={<Ionicons name='calendar-outline' size={20} color='#333' />}
          color='#e5f7ff'
        />
      </View>


      <Text style={styles.sectionTitle}>Explore More</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.exploreScroll}>
        {/* Danh sách item, ví dụ 3 item mockup */}
        <View style={styles.exploreItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.exploreImage}
          />
          <Text>Item 1</Text>
        </View>
        <View style={styles.exploreItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.exploreImage}
          />
          <Text>Item 2</Text>
        </View>
        <View style={styles.exploreItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.exploreImage}
          />
          <Text>Item 3</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    color: '#666',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scanButton: {
    flexDirection: 'row',
    backgroundColor: '#3399FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  exploreScroll: {
    marginBottom: 24,
  },
  exploreItem: {
    width: 100,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    elevation: 2,
  },
  exploreImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
    borderRadius: 8,
  },
});
