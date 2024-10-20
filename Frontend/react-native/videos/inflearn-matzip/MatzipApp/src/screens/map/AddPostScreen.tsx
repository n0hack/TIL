import { AddPostHeaderRight } from '@/components/AddPostHeaderRight';
import { CustomButton } from '@/components/CustomButton';
import { DatePickerOptions } from '@/components/DatePickerOptions';
import { ImageInput } from '@/components/ImageInput';
import { InputField } from '@/components/InputField';
import { MarkerSelector } from '@/components/MarkerSelector';
import { PreviewImageList } from '@/components/PreviewImageList';
import { ScoreInput } from '@/components/ScoreInput';
import { colors, mapNavigations } from '@/constants';
import { useMutateCreatePost } from '@/hooks/queries/useMutateCreatePost';
import { useForm } from '@/hooks/useForm';
import { useGetAddress } from '@/hooks/useGetAddress';
import { useImagePicker } from '@/hooks/useImagePicker';
import { useModal } from '@/hooks/useModal';
import { usePermission } from '@/hooks/usePermission';
import { MapStackParamList } from '@/navigations/stack/MapStackNavigator';
import { MarkerColor } from '@/types/domain';
import { getDateWithSeperator, validateAddPost } from '@/utils';
import { StackScreenProps } from '@react-navigation/stack';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';

type AddPostScreenProps = StackScreenProps<MapStackParamList, typeof mapNavigations.ADD_POST>;

const AddPostScreen = ({ navigation, route }: AddPostScreenProps) => {
  const location = route.params.location;
  const descriptionRef = useRef<TextInput>(null);
  const createPost = useMutateCreatePost();
  const addPost = useForm({
    initialValue: { title: '', description: '' },
    validate: validateAddPost,
  });
  const [markerColor, setMarkerColor] = useState<MarkerColor>('RED');
  const [score, setScore] = useState(5);
  const address = useGetAddress(location);
  const [date, setDate] = useState(new Date());
  const [isPicked, setIsPicked] = useState(false);
  const dateOption = useModal();
  const imagePicker = useImagePicker({ initialImages: [] });
  usePermission('PHOTO');

  const handleSelectMarker = (name: MarkerColor) => {
    setMarkerColor(name);
  };

  const handleChangeScore = (value: number) => {
    setScore(value);
  };

  const handleChangeDate = (pickedDate: Date) => {
    setDate(pickedDate);
  };

  const handleConfirmDate = () => {
    setIsPicked(true);
    dateOption.hide();
  };

  const handleSubmit = useCallback(() => {
    const body = {
      date,
      title: addPost.values.title,
      description: addPost.values.description,
      color: markerColor,
      score,
      imageUris: [],
      address,
    };
    createPost.mutate(
      { ...location, ...body },
      {
        onSuccess: () => navigation.goBack(),
      },
    );
  }, [
    addPost.values.description,
    addPost.values.title,
    address,
    createPost,
    date,
    location,
    markerColor,
    navigation,
    score,
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => AddPostHeaderRight({ onSubmit: handleSubmit }),
    });
  }, [handleSubmit, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <InputField value={address} disabled icon={<Octicons name="location" size={16} color={colors.GRAY_500} />} />
          <CustomButton
            variant="outlined"
            size="large"
            label={isPicked ? getDateWithSeperator(date, '. ') : '날짜 선택'}
            onPress={dateOption.show}
          />
          <InputField
            placeholder="제목을 입력하세요."
            touched={addPost.touched.title}
            error={addPost.errors.title}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => descriptionRef.current?.focus()}
            {...addPost.getTextInputProps('title')}
          />
          <InputField
            ref={descriptionRef}
            placeholder="기록하고 싶은 내용을 입력하세요. (선택)"
            touched={addPost.touched.description}
            error={addPost.errors.description}
            multiline
            returnKeyType="next"
            {...addPost.getTextInputProps('description')}
          />
          <MarkerSelector markerColor={markerColor} onPressMarker={handleSelectMarker} score={score} />
          <ScoreInput score={score} onChangeScore={handleChangeScore} />
          <View style={styles.imagesViewer}>
            <ImageInput onChange={imagePicker.handleChange} />
            <PreviewImageList imageUris={imagePicker.imageUris} />
          </View>
          <DatePickerOptions
            date={date}
            isVisible={dateOption.isVisible}
            onChangeDate={handleChangeDate}
            onConfirmDate={handleConfirmDate}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 20,
  },
  imagesViewer: {
    flexDirection: 'row',
  },
});

export default AddPostScreen;
