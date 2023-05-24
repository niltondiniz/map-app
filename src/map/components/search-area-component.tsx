import { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


class SearchAreaComponent extends Component {

    render() {
        return (
            <View style={this.styles.searcharea}>
                <Ionicons style={this.styles.icon} name="md-search" size={32} />
                <TextInput style={this.styles.inputText}
                    placeholder="Pesquise um local"
                    keyboardType="default"
                />
            </View>
        );
    }

    private styles = StyleSheet.create({
        searcharea: {
            position: 'absolute',
            top: 96,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 30,
            elevation: 5,
            width: '90%',
            height: 50,
            paddingHorizontal: 16,
            zIndex:2

        },
        icon: {
            marginRight: 16
        },
        inputText: {
            fontSize: 18
        }
    });
}

export default SearchAreaComponent;