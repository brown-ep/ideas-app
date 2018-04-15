import React, { Component } from 'react'
import { FontAwesome } from "@expo/vector-icons";
import {
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class IconButton extends Component {

    constructor() {
        super()
        this.state = {
            on: false
        }

    }

    iconStyle() {
        let style = [styles.icon]
        
        if (this.props.toggle && this.state.on) {
            styles.push(styles.iconActive)
        }

        const { fontSize = 18 } = this.props;
        return [...style, {fontSize}]
    }

    toggle() {
        this.setState({on: !this.state.on})
    }

    handleTouch() {
        if (this.props.toggle) this.toggle();
        this.props.onChange(this.state.on);
    }

    iconNameForState() {
        if (this.state.on) return this.props.icon.active;
        return this.props.icon.normal;
    }

    render() {
        const { icon } = this.props
        return (
            <TouchableOpacity onPress={this.handleTouch}>
                <FontAwesome style={this.iconStyle()} name={this.iconNameForState()} />
            </TouchableOpacity>
        )
    }
}

export const Icons = {
    heart: {
        normal: 'heart-o',
        active: 'heart'
    },
    comment: {
        normal: 'comment-o',
        active: 'comment',
    }
}
    

const styles = StyleSheet.create({
    iconActive: {
        color: 'red'
    }
})