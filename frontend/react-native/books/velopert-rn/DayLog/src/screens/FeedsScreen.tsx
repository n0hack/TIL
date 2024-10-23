import { StyleSheet, View } from 'react-native';
import { FloatingWriteButton } from '../components/FloatingWriteButton';
import { useContext, useState } from 'react';
import { LogContext } from '../contexts/LogContext';
import { FeedList } from '../components/FeedList';

type FeedsScreenProps = {};

const FeedsScreen = ({}: FeedsScreenProps) => {
  const { logs } = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = (isBottom: boolean) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.container}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedsScreen;
