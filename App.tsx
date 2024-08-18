import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,
        Text,
        View,
        Button,
        TextInput,
        ScrollView,
      FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function addGoalHandler(enteredGoal: string) {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals}
          renderItem={({item, index}) => (
              courseGoals.length === 0 
              ? <Text>No Goals Yet!</Text> 
              : <GoalItem text={item} index={index}/>
          )}
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  
  goalsContainer: {
    flex: 5
  }
});
