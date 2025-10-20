const paginator = require('../utils/paginator');
const { ObjectId } = require('mongodb');

async function list(collection, page, search) {
  const perPage = 10;

  // title이 search와 부분일치하는지 확인
  const query = { title: new RegExp(search, 'i') };

  // 10개씩 가져오고, 정해진 규칙만큼 건너뜀
  const cursor = collection
    .find(query, {
      limit: perPage,
      skip: (page - 1) * perPage,
    })
    .sort({ createdAt: -1 });

  // 검색어에 걸리는 게시물 총합
  const totalCount = await collection.count(query);
  const posts = await cursor.toArray();

  const paginatorObj = paginator({ totalCount, page, perPage });

  return [posts, paginatorObj];
}

async function writePost(collection, post) {
  // 생성일시와 조회수 넣음
  post.hits = 0;
  post.createdAt = new Date().toISOString();

  return collection.insertOne(post);
}

// 패스워드 노출 방지를 위한 프로젝션 옵션
const projectionOption = {
  projection: {
    password: 0,
    'commnets.password': 0,
  },
};

async function getDetailPost(collection, id) {
  return collection.findOneAndUpdate({ _id: new ObjectId(id) }, { $inc: { hits: 1 } }, projectionOption);
}

async function getPostByIdAndPassword(collection, { id, password }) {
  return collection.findOne({ _id: new ObjectId(id), password }, projectionOption);
}

async function getPostById(collection, id) {
  return collection.findOne({ _id: new ObjectId(id) }, projectionOption);
}

async function updatePost(collection, id, post) {
  const toUpdatePost = {
    $set: {
      ...post,
    },
  };

  return collection.updateOne({ _id: new ObjectId(id) }, toUpdatePost);
}

module.exports = {
  list,
  writePost,
  getDetailPost,
  getPostByIdAndPassword,
  getPostById,
  updatePost,
  projectionOption,
};
