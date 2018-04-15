import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import ListCell from '../components/ListCell/ListCell'

export default class Onboard extends Component {


	render() {
		return (
			<View style={{flex: 1}}>
				<FlatList
				data={[{key: 'Swift'}, {key: 'iOS'}, {key: 'React'}, {key: 'React Native'}]}
				renderItem={({item}) => <ListCell text={item.key} onPress={() => Alert.alert('est')} />  }
				renderSeparator={() => <div style={{color: 'black'}} >--</div>}
				/>
			</View>
			);
	}
}
