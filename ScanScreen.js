import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Nút back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Khu vực “quét” (giả lập bằng ảnh chai nước) */}
      <View style={styles.scannerContainer}>
        {/* Overlay mô phỏng khung quét */}
        <View style={styles.scannerOverlay}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>

        {/* Ảnh chai nước */}
        <Image
          source={{
            uri: 'assets/favicon.png',
          }}
          style={styles.bottleImage}
        />
      </View>

      {/* Thẻ sản phẩm ở dưới */}
      <View style={styles.productCard}>
        <Image
          source={{
            uri: 'assets/favicon.png',
          }}
          style={styles.productThumb}
        />
        <View style={styles.productText}>
          <Text style={styles.brandName}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F2', // màu nền nhẹ, bạn có thể thay đổi
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 2,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    // Shadow iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    // Shadow Android
    elevation: 4,
  },
  scannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100, // đẩy xuống dưới nút back
  },
  scannerOverlay: {
    position: 'absolute',
    width: 250,
    height: 380,
    // Có thể thêm border hay backgroundColor='rgba(255,255,255,0.1)' tùy ý
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#fff',
    borderWidth: 4,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopLeftRadius: 12,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopRightRadius: 12,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 12,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomRightRadius: 12,
  },
  bottleImage: {
    width: 160,
    height: 300,
    resizeMode: 'contain',
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    padding: 12,

    // Shadow iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,

    // Shadow Android
    elevation: 4,
  },
  productThumb: {
    width: 40,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: 'cover',
  },
  productText: {
    flex: 1,
    justifyContent: 'center',
  },
  brandName: {
    color: '#999',
    fontSize: 14,
  },
  productName: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#6A75CA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
