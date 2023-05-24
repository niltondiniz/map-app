import { Component } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';

class MenuBarComponent extends Component {

    render() {
        return (
            <View style={this.styles.menubar}>
                <Ionicons style={this.styles.menubarIconOne} name="md-menu" size={25} />
                <Ionicons style={this.styles.menubarIconOne} name="md-menu" color={'transparent'} size={25} />
                <Text style={this.styles.menubarText}>MAP APP</Text>
                <AntDesign style={this.styles.menubarIconTwo} name="filter" size={25} />
                <Ionicons style={this.styles.menubarIconThree} name="md-paper-plane-outline" size={25} />
            </View>
        );
    }

    private styles = StyleSheet.create({
        menubar: {
            paddingHorizontal: 16,
            width: '100%',
            height: 70,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            position: 'absolute',
            top: 45,
            alignItems: 'stretch',
            zIndex:2
        },
        menubarIconOne: {
            marginRight: 16
        },
        menubarText: {
            flex: 1,
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 22,
            fontWeight: '500'
        },
        menubarIconTwo: {
            marginHorizontal: 16
        },
        menubarIconThree: {

        }
    });
}

export default MenuBarComponent;