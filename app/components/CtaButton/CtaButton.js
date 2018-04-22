import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { brandColor } from '../../styles/vars'

export default ({ text, style }) => (
  <TouchableOpacity style={[style, styles.button]}>
    <View style={styles.content}>
      <FontAwesome name="edit" style={styles.text} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    width: '85%',
    backgroundColor: brandColor,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10
  },
  content: {
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: 18,
    flex: 0,
    marginRight: 10
  }
})
