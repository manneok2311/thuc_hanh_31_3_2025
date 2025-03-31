import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function ShoppingCartScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <Ionicons name="trash-outline" size={24} color="#000" />
      </View>
      <View style={styles.topSection}>
      <View style={styles.imageContainer}>
  <Image source={require('./assets/burger.png')} style={styles.mainImage} />
  <View style={styles.discountBadge}>
    <Text style={styles.discountText}>10% OFF</Text>
  </View>
  <View style={styles.thumbnailRow}>
    <Image source={require('./assets/burger.png')} style={styles.thumbnailImage} />
    <Image source={require('./assets/burger.png')} style={styles.thumbnailImage} />
    <Image source={require('./assets/burger.png')} style={styles.thumbnailImage} />
  </View>
</View>
</View>
<View style={styles.itemInfoContainer}>
  <View style={{ flex: 1 }}>
    <Text style={styles.itemTitle}>BURGER</Text>
    <Text style={styles.rating}>⭐ 4.9 (3k+ Rating)</Text>
  </View>

  <View style={{ alignItems: 'flex-end' }}>
    <Text style={styles.itemPrice}>$28</Text>
    <View style={styles.quantityControl}>
      <TouchableOpacity style={styles.qtyButton}>
        <Text style={styles.qtySymbol}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>02</Text>
      <TouchableOpacity style={styles.qtyButton}>
        <Text style={styles.qtySymbol}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
      <View style={styles.addressBox}>
        <Ionicons name="location-outline" size={20} color="#000" />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.addressText}>Delivery Address</Text>
          <Text style={styles.addressValue}>Dhaka, Bangladesh</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="edit" size={20} color="#6c47ff" />
        </TouchableOpacity>
      </View>
      <View style={styles.paymentRow}>
        <FontAwesome name="credit-card" size={20} color="#000" />
        <Text style={styles.paymentLabel}>Payment Method</Text>
        <TouchableOpacity>
          <Text style={styles.changeBtn}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.summaryBox}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal (2)</Text>
          <Text style={styles.summaryText}>$56</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryTextGray}>Delivery Fee</Text>
          <Text style={styles.summaryTextGray}>$6.20</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.totalText}>Payable Total</Text>
          <Text style={styles.totalText}>$62.2</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 16,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    topSection: {
      backgroundColor: '#fff',
      padding: 16,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    imageContainer: {
      position: 'relative',
      alignItems: 'center',
      marginTop: 20,
    },
    mainImage: {
      width: 400,
      height: 250,
      borderRadius: 16,
      resizeMode: 'cover',
    },
    discountBadge: {
      position: 'absolute',
      top: 10,
      left: 10,
      backgroundColor: '#4B00FF',
      paddingHorizontal: 8,
      paddingVertical: 20,
      borderRadius: 25,
    },
    discountText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize:13,
    },
    thumbnailRow: {
      position: 'absolute',
      bottom: -20,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
    },
    thumbnailImage: {
      width: 90,
      height: 80,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#fff',
      marginHorizontal: 5,
    },
    itemInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      marginTop: 20,
    },
    itemTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    rating: {
      fontSize: 12,
      color: '#999',
      marginTop: 4,
    },
    itemPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#6c47ff',
    },
    quantityControl: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    qtyButton: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    qtySymbol: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    quantity: {
      fontSize: 16,
      fontWeight: '500',
    },
    addressBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#e8f7f2',
      padding: 14,
      borderRadius: 12,
      marginTop: 16,
    },
    addressText: {
      fontSize: 12,
      color: '#888',
    },
    addressValue: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    paymentRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    paymentLabel: {
      flex: 1,
      marginLeft: 10,
      fontWeight: '500',
    },
    changeBtn: {
      color: '#6c47ff',
      fontWeight: 'bold',
    },
    summaryBox: {
      marginTop: 20,
      paddingVertical: 10,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 4,
    },
    summaryText: {
      fontSize: 14,
      fontWeight: '500',
    },
    summaryTextGray: {
      fontSize: 14,
      color: '#888',
    },
    totalText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#6c47ff',
    },
    confirmButton: {
      backgroundColor: '#6c47ff',
      borderRadius: 23,
      paddingVertical: 14,
      alignItems: 'center',
      marginVertical: 20,
    },
    confirmText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  