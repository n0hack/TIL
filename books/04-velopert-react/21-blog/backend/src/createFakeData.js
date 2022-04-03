import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, omnis nesciunt eius reprehenderit vitae, sequi harum nostrum impedit et atque, quasi est itaque ipsam neque aspernatur voluptates? Iusto, quae doloribus?',
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
