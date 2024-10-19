import { AddPostHeaderRight } from '@/components/AddPostHeaderRight';
import { CustomButton } from '@/components/CustomButton';
import { InputField } from '@/components/InputField';
import { colors, mapNavigations } from '@/constants';
import { useMutateCreatePost } from '@/hooks/queries/useMutateCreatePost';
import { useForm } from '@/hooks/useForm';
import { MapStackParamList } from '@/navigations/stack/MapStackNavigator';
import { MarkerColor } from '@/types/domain';
import { validateAddPost } from '@/utils';
import { StackScreenProps } from '@react-navigation/stack';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
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
  const [address, setAddress] = useState('');

  const handleSubmit = useCallback(() => {
    const body = {
      date: new Date(),
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
  }, [addPost.values.description, addPost.values.title, address, createPost, location, markerColor, score]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => AddPostHeaderRight({ onSubmit: handleSubmit }),
    });
  }, [handleSubmit, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <InputField value="" disabled icon={<Octicons name="location" size={16} color={colors.GRAY_500} />} />
          <CustomButton variant="outlined" size="large" label="날짜 선택" />
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
});

export default AddPostScreen;
