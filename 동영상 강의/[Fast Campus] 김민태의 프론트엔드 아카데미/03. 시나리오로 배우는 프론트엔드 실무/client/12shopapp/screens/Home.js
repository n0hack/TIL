import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { View, Text, Image, Avatar, Badge, Typography, Colors } from 'react-native-ui-lib';

Colors.loadColors({
  pink: '#FF69B4',
  gold: '#FFD700',
  mint: '#0BB68D',
});

Typography.loadTypographies({
  h1: {fontSize: 82, fontWeight: '600', lineHeight: 80},
  h2: {fontSize: 18, fontWeight: '300', lineHeight: 64},
});

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container} padding-30 marginT-30>
          <View style={{ flexDirection: 'row' }}>
            <Badge label={'12T'} size={32} backgroundColor={'#FFC700'}/>
            <Badge label={'Soldout'} size={32} backgroundColor={'#FFC700'}/>
          </View>

          <Text text30L>Marshall</Text>
          <Text text30L>Action2</Text>
          <Text text100M black20>키크론 K8 RGB 블루투스 무선 기계식 키보드 핫스왑 청축</Text>
          <Image source={{ uri: "http://cdn.12shop.com:1201/01/large/34bdfd0a-671d-4ab1-b32c-59f0025fd7e4.jpg" }} height={200} width="100%" marginT-20 borderRadius={8} />
          <View style={{ height: 120, marginTop: 60, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Text h1 mint>320</Text><Text h2 mint style={{ marginTop: 22}}>people</Text>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            <Avatar source={{ url: 'https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490__480.jpg' }} />
            <Avatar source={{ url: 'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116__480.jpg' }} />
            <Avatar source={{ url: 'https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302__480.jpg' }} />
            <Avatar source={{ url: 'https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703__480.jpg' }} />
            <Avatar source={{ url: 'https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814__480.jpg' }} />
            <Avatar source={{ url: 'https://cdn.pixabay.com/photo/2016/11/23/00/33/man-1851469__480.jpg' }} />
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Text gray300>... more people</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})