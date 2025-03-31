import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const categories = [
  {
    label: 'PIZZA',
    icon: <MaterialCommunityIcons name="pizza" size={24} color="#000" />
  },
  {
    label: 'BURGER',
    icon: <FontAwesome5 name="hamburger" size={24} color="#000" />
  },
  {
    label: 'DRINK',
    icon: <MaterialCommunityIcons name="glass-cocktail" size={24} color="#000" />
  },
  {
    label: 'RICE',
    icon: <MaterialCommunityIcons name="rice" size={24} color="#000" />
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>{'\n\n'}</Text>
      <LinearGradient colors={['#fffbe9', '#f4f4f4']} style={styles.header}>
        <View style={styles.headerRow}>
        <Image source={require('./assets/anh4.jpg')} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.locationLabel}>Your Location</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="location-sharp" size={16} color="#5f5d5d" />
              <Text style={styles.locationText}>Savar, Dhaka</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bellButton}>
            <Ionicons name="notifications-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="white" style={{ marginRight: 6 }} />
          <TextInput
            placeholder="Search your food"
            placeholderTextColor="white"
            style={styles.searchInput}
          />
          <Feather name="sliders" size={20} color="#fff" style={styles.filterIcon} />
        </View>
      </LinearGradient>
      <View style={styles.categories}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={[styles.categoryBox, index === 0 && styles.activeCategory]}>
            {item.icon}
            <Text style={[styles.categoryText, index === 0 && styles.activeText]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.banner}>
        <Image source={require('./assets/burger.png')} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>BURGER</Text>
          <Text style={styles.bannerSubtitle}>Today’s Hot offer</Text>
          <Text style={styles.bannerRating}>⭐ 4.9 (3k+ Rating)</Text>
        </View>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>10% OFF</Text>
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <View style={styles.popularItems}>
        <View style={styles.popularCard}>
          <Image source={require('./assets/burger.png')} style={styles.popularImage} />
          <Text style={styles.popularLabel}>BURGER</Text>
        </View>
        <View style={styles.popularCard}>
          <Image source={require('./assets/pizza.png')} style={styles.popularImage} />
          <Text style={styles.popularLabel}>PIZZA</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 12,
  },
  locationLabel: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  locationText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
    textAlign: 'center',
  },
  bellButton: {
    marginLeft: 8,
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#0000FF',
    paddingHorizontal: 12,
    borderRadius: 20,
    height: 55,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,

  },
  filterIcon: {
    backgroundColor: '#6c47ff',
    padding: 8,
    borderRadius: 8,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  categoryBox: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#555',
    marginTop: 4,
  },
  activeCategory: {
    backgroundColor: '#00c29e',
  },
  activeText: {
    color: '#fff',
  },
  banner: {
    backgroundColor: '#1e1e1e',
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 30,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height:200,
  },
  bannerImage: {
    width: 160,
    height: 195,
    borderRadius:30,
    marginRight:10,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bannerSubtitle: {
    color: '#ccc',
    fontSize: 12,
  },
  bannerRating: {
    color: '#ffc107',
    fontSize: 12,
    marginTop: 4,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#6c47ff',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  sectionHeader: {
    marginTop: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewAll: {
    color: '#6c47ff',
    fontSize: 12,
  },
  popularItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  popularCard: {
    width: 140,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  popularImage: {
    width: 175,
    height: 190,
    borderRadius: 10,
  },
  popularLabel: {
    marginTop: 8,
    fontWeight: '600',
  },
});