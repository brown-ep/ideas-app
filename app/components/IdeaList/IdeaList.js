import React, { PureComponent } from 'react'
import {
  Alert,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import IdeaCell from './IdeaCell/IdeaCell'

export const IdeaList = ({ ideas, firebase, showDetail }) => {
  // Build Todos list if todos exist and are loaded
  return (
    <FlatList
      data={ideas ? ideas : []}
      renderItem={({ item }) => (
        <IdeaCell idea={item} handlePress={() => showDetail(item)} />
      )}
      keyExtractor={idea => idea.id}
    />
  )
}

const mapStateToProps = state => ({
  ideas: state.firestore.ordered.ideas
})

export default compose(
  firestoreConnect([{ collection: 'ideas' }]),
  connect(mapStateToProps)
)(IdeaList)
