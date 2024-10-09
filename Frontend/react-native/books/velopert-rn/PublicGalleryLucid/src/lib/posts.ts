import firestore, { Timestamp } from '@react-native-firebase/firestore';
import { User } from '../contexts/UserContext';

export type Post = {
  id: string;
  user: User;
  photoURL: string;
  description: string;
  createdAt: Timestamp;
};

export const PAGE_SIZE = 3;

const postsCollection = firestore().collection('posts');

export function createPost({
  user,
  photoURL,
  description,
}: Pick<Post, 'user' | 'photoURL' | 'description'>) {
  return postsCollection.add({
    user,
    photoURL,
    description,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
}

export async function getPosts({
  userId,
  id,
  mode,
}: {
  userId?: string;
  mode?: 'newer' | 'older';
  id?: string;
}) {
  let query = postsCollection.orderBy('createdAt', 'desc').limit(PAGE_SIZE);
  if (userId) {
    query = query.where('user.id', '==', userId);
  }

  if (id) {
    const cursorDoc = await postsCollection.doc(id).get();
    if (mode === 'older') {
      query = query.startAfter(cursorDoc);
    } else {
      query = query.endBefore(cursorDoc);
    }
  }
  const snapshot = await query.get();
  const posts = snapshot.docs.map((docs) => ({ id: docs.id, ...docs.data() }));
  return posts as Post[];
}

export async function getOlderPosts(id: string, userId?: string) {
  return getPosts({ userId, id, mode: 'older' });
}

export async function getNewerPosts(id: string, userId?: string) {
  return getPosts({ userId, id, mode: 'newer' });
}
