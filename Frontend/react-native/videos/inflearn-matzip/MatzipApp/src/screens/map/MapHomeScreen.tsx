import { Alert, Pressable, StyleSheet, View } from 'react-native';
import MapView, { Callout, LatLng, LongPressEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { alerts, colors, mapNavigations } from '@/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MapStackParamList } from '@/navigations/stack/MapStackNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '@/navigations/drawer/MainDrawerNavigator';
import { useRef, useState } from 'react';
import { useUserLocation } from '@/hooks/useUserLocation';
import { usePermission } from '@/hooks/usePermission';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { mapStyle } from '@/style/mapStyle';
import { CustomMarker } from '@/components/CustomMarker';
import { useGetMarkers } from '@/hooks/queries/useGetMarkers';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<MapStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

type MapHomeScreenProps = {};

const MapHomeScreen = ({}: MapHomeScreenProps) => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<Navigation>();
  const { userLocation, isUserLocationError } = useUserLocation();
  const mapRef = useRef<MapView>(null);
  const [selectLocation, setSelectLocation] = useState<LatLng | null>();
  const { data: markers = [] } = useGetMarkers();

  usePermission('LOCATION');

  const handleLongPressMapView = ({ nativeEvent }: LongPressEvent) => {
    setSelectLocation(nativeEvent.coordinate);
  };

  const handlePressAddPost = () => {
    if (!selectLocation) {
      return Alert.alert(alerts.NOT_SELECTED_LOCATION.TITLE, alerts.NOT_SELECTED_LOCATION.DESCRIPTION);
    }

    navigation.navigate(mapNavigations.ADD_POST, {
      location: selectLocation,
    });
    setSelectLocation(null);
  };

  const handlePressUserLocation = () => {
    if (isUserLocationError) {
      // TODO 에러 메시지 표시
      return;
    }

    mapRef.current?.animateToRegion({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        followsUserLocation
        showsMyLocationButton={false}
        customMapStyle={mapStyle}
        onLongPress={handleLongPressMapView}
      >
        {markers.map(({ id, color, score, ...coordinate }) => (
          <CustomMarker key={id} color={color} score={score} coordinate={coordinate} />
        ))}

        {selectLocation && (
          <Callout>
            <Marker coordinate={selectLocation} />
          </Callout>
        )}
      </MapView>
      <Pressable
        style={[styles.drawerButton, { top: inset.top || inset.top + 20 }]}
        onPress={() => navigation.openDrawer()}
      >
        <IonIcons name="menu" color={colors.WHITE} size={25} />
      </Pressable>

      <View style={styles.buttonList}>
        <Pressable style={styles.mapButton} onPress={handlePressAddPost}>
          <MaterialIcons name="add" color={colors.WHITE} size={25} />
        </Pressable>
        <Pressable style={styles.mapButton} onPress={handlePressUserLocation}>
          <MaterialIcons name="my-location" color={colors.WHITE} size={25} />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerButton: {
    position: 'absolute',
    left: 0,
    // 노치 디자인 대응
    top: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.PINK_700,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    // 안드로이드
    elevation: 4,
  },
  buttonList: {
    position: 'absolute',
    bottom: 30,
    right: 15,
  },
  mapButton: {
    backgroundColor: colors.PINK_700,
    marginVertical: 5,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    // 안드로이드
    elevation: 2,
  },
});

export default MapHomeScreen;
