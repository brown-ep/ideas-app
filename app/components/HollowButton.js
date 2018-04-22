import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { brandColor } from '../styles/vars'

export default ({ text, onPress, style, icon }) => (
  <TouchableOpacity style={[styles.wrap, style]} onPress={onPress}>
    <View style={styles.content}>
      {icon && <FontAwesome name={icon} style={[styles.text, styles.icon]} />}
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  wrap: {
    borderColor: brandColor,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: brandColor,
    textAlign: 'center',
    fontWeight: '300',
  },
  icon: {
    opacity: 0.9,
    marginTop: 0,
    marginRight: 10,
  },
})
