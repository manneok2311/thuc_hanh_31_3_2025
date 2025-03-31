import React, { useState } from 'react';
import {
  View, Text, Image, Switch,
  TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  const textColor = darkMode ? '#fff' : '#000';
  const bgColor = darkMode ? '#1c1c1e' : '#f2f2f2';
  const cardColor = darkMode ? '#2c2c2e' : '#fff';

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.headerBackground}>
        <TouchableOpacity style={styles.backIcon}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <Image source={require('./assets/anh4.jpg')} style={styles.avatar} />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="edit" size={14} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={[styles.name, { color: textColor }]}>Mạnh Lê</Text>
        <Text style={styles.email}>manhleoknoinhieu@gmail.com</Text>
        <View style={[styles.menuCard, { backgroundColor: cardColor }]}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Icon name={item.icon} size={20} color={textColor} />
              <Text style={[styles.menuText, { color: textColor }]}>{item.label}</Text>
              {item.switch ? (
                <Switch value={darkMode} onValueChange={setDarkMode} />
              ) : (
                <Icon name="chevron-right" size={20} color="#ccc" />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const menuItems = [
  { label: 'Home', icon: 'home' },
  { label: 'My Card', icon: 'credit-card' },
  { label: 'Dark Mode', icon: 'moon', switch: true },
  { label: 'Track Your Order', icon: 'truck' },
  { label: 'Settings', icon: 'settings' },
  { label: 'Help Center', icon: 'help-circle' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    height: 220,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    marginTop: -60,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#fff',
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#007AFF',
    padding: 5,
    borderRadius: 10,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  email: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    marginBottom: 20,
  },
  menuCard: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
