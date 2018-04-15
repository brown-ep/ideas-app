import React, { PureComponent } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import IdeaCell from "./IdeaCell/IdeaCell";

export const IdeaList = ({ ideas, firebase }) => {
  // Build Todos list if todos exist and are loaded
  return (
      <FlatList
        data={ideas ? ideas : []}
        renderItem={({item}) => <IdeaCell idea={item} />}
        keyExtractor={idea => idea.id}
      />
  );
};

export default compose(
  firestoreConnect([{collection: 'ideas'}]),
  connect((state, props) => ({
    ideas: state.firestore.ordered.ideas,
  }))
  )(IdeaList)
