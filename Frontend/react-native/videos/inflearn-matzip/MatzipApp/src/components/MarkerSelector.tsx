import { MarkerColor } from '@/types/domain';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CustomMarker } from './CustomMarker';
import { colors } from '@/constants';

type MarkerSelectorProps = {
  markerColor: MarkerColor;
  score: number;
  onPressMarker: (name: MarkerColor) => void;
};

const MarkerSelector = ({ score = 5, markerColor, onPressMarker }: MarkerSelectorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.markerLabel}>마커 선택</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.markerInputScroll}>
          {(['RED', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE'] as MarkerColor[]).map(color => (
            <Pressable
              key={color}
              style={[styles.markerBox, markerColor === color && styles.pressedMarker]}
              onPress={() => onPressMarker(color)}
            >
              <CustomMarker color={color} score={score} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: 15,
  },
  markerLabel: {
    marginBottom: 15,
    color: colors.GRAY_700,
  },
  markerInputScroll: {
    flexDirection: 'row',
    gap: 20,
  },
  markerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: colors.GRAY_100,
    borderRadius: 6,
  },
  pressedMarker: {
    borderWidth: 2,
    borderColor: colors.RED_500,
  },
});

export { MarkerSelector };
