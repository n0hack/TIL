import auth, {
  CallbackOrObserver,
  FirebaseAuthTypes,
} from '@react-native-firebase/auth';

export function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function subscribeAuth(
  callback: CallbackOrObserver<FirebaseAuthTypes.AuthListenerCallback>
) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}
