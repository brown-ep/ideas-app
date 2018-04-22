import React, { Component } from 'react'
import { Alert, StyleSheet, Text, View, SafeAreaView } from 'react-native'

import IdeaList from '../components/IdeaList/IdeaList'
import CtaButton from '../components/CtaButton/CtaButton'
import { brandColor } from '../styles/vars'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Ideas',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: brandColor,
    headerTitleStyle: {
      fontWeight: '800',
      color: '#222',
    },
  }

  showDetail = item => {
    // console.log('HI')
    // Alert.alert('hi')
    this.props.navigation.navigate('IdeaDetails', { item })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <IdeaList showDetail={this.showDetail} />
        <CtaButton style={styles.cta} text="New Idea" />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  cta: {
    alignSelf: 'center',
    bottom: 20,
  },
})
