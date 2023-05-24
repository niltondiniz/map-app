import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { LatLng } from 'react-native-maps';
import MenuBarComponent from '../components/menu-bar-component';
import SearchAreaComponent from '../components/search-area-component';
import * as Location from 'expo-location';
import React from 'react';


interface Props {

}

interface State {
    location: any;
}

class MapPage extends Component<Props, State> {

    private mapView: MapView | null;

    constructor(props: Props) {
        super(props);
        this.state = { location: { latitude: -22.9063832, longitude: -43.179751, } }
        this.mapView = null;
    }

    private setLocation(location: Location.LocationObject) {
        this.setState({ location: location });
    }

    async componentDidMount(): Promise<void> {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setLocation(location);

        let region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0
        }

        this.mapView!.animateToRegion(region, 1000)
        console.log(JSON.stringify(location));
    }

    render() {
        return (
            <View style={this.styles.container}>
                <MapView
                    ref={(map) => { this.mapView = map; }}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsMyLocationButton={false}                    
                    style={this.styles.map}
                />
                <MenuBarComponent />
                <SearchAreaComponent />
            </View>
        );
    }

    private styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        map: {
            height: '100%',
            width: '100%',
            flex: 1
        }
    });
}

export default MapPage;