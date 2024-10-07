import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import { Log } from '../contexts/LogContext';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

type FeedListItemProps = {
  log: Log;
};

function formatDate(date: string) {
  const d = new Date(date);
  const now = new Date();
  const diff = (now.getTime() - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    return '방금 전';
  }

  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }

  return format(d, 'PPP EEE p', { locale: ko });
}

function truncate(text: string) {
  const replaced = text.replace(/\n/g, ' ');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
}

const FeedListItem = ({ log }: FeedListItemProps) => {
  const { title, body, date } = log;

  return (
    <Pressable
      style={({ pressed }) => [styles.container, Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' }]}
      android_ripple={{ color: '#ededed' }}
    >
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: '#263238',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    lineHeight: 21,
  },
});

export { FeedListItem };
