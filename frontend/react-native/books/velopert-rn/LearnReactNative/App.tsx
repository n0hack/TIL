import { SafeAreaView, StyleSheet } from 'react-native';
import { Counter } from './components/Counter';
import { useState } from 'react';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <SafeAreaView style={[styles.full]}>
      <Counter
        count={count}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
