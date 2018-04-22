import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native'

import IconButton, { Icons } from '../components/IconButton/IconButton'
import HollowButton from '../components/HollowButton'

import { brandColor } from '../styles/vars'

class IdeaDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title:
        params && params.item && params.item.title ? params.item.title : 'Idea',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: brandColor,
      headerTitleStyle: {
        fontWeight: '800',
        color: '#222',
      },
    }
  }

  render() {
    const { params } = this.props.navigation.state
    const idea = params ? params.item : null

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {/* <View style={styles.profileArea}>
          <Image style={styles.image} source={{ uri: idea.image }} />
        </View> */}
          <View style={styles.content}>
            <Text style={[styles.text, styles.name]}>
              {idea.name.toUpperCase()}
            </Text>
            <Text style={[styles.text, styles.title]}>{idea.title}</Text>
            <Text style={[styles.text, styles.description]}>
              {idea.description}
            </Text>
            <HollowButton
              text={`Message ${idea.name.split(' ')[0]}`}
              icon="comment-o"
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    width: '100%',
  },
  content: {
    flex: 1,
  },
  profileArea: {
    flex: 0,
    paddingRight: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
  },
  name: {
    fontSize: 14,
    fontWeight: '800',
    color: 'rgba(0,0,0,.4)',
  },
  description: {
    fontSize: 22,
    fontWeight: '300',
    color: '#666',
  },
})

export default IdeaDetail
