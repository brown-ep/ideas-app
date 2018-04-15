import React, { PureComponent } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import IconButton, { Icons } from '../../IconButton/IconButton'


export const IdeaCell = ({ idea }) => (
  <TouchableOpacity style={styles.cell}>
    <View style={styles.profileArea}>
      <Image
        style={styles.image}
        source={{
          uri: idea.image
        }}
      />
    </View>
    <View style={styles.content}>
      <Text style={[styles.text, styles.name]}>{idea.name.toUpperCase()}</Text>
      <Text style={[styles.text, styles.title]}>{idea.title}</Text>
      <Text style={[styles.text, styles.description]}>{idea.description}</Text>
      <View style={styles.icons}>
        <IconButton style={styles.icon} icon={Icons.heart} toggle={true} onChange={console.log} />
        <IconButton style={styles.icon} icon={Icons.comment} toggle={true} onChange={console.log} />
      </View>
    </View>
    <View style={styles.indicator}>
      <TouchableOpacity>
        <FontAwesome style={styles.icon} name="chevron-right" />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cell: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    padding: 10,
    width: "100%"
  },
  text: {
    flexWrap: "wrap",
    flex: 1
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  content: {
    flexWrap: "wrap",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column'
  },
  name: {
    fontSize: 12,
    fontWeight: "800",
    color: "rgba(0,0,0,.4)"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  icons: {
    flexDirection: "row",
    marginTop: 10,
    borderColor: 'red',
    borderWidth: 1
  },
  icon: {
    paddingRight: 10
  },
  indicator: {
    opacity: 0.6,
    alignSelf: "center"
  }
});

export default IdeaCell;
