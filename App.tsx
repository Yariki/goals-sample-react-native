import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { Goal } from './types/types';
import uuid from 'react-native-uuid';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function startNewGoalHandler() {
    setModalIsVisible(true);
  }

  function endNewGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoal: string) {
    setCourseGoals(currentGoals =>
      [
        ...currentGoals,
        {
          value: enteredGoal,
          id: uuid.v4().toString()
        }
      ]);
    endNewGoalHandler();
  }

  function removeGoalHandler(goalId: string) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title='Add New Goal'
          color='#0313f7'
          onPress={startNewGoalHandler} />
        <GoalInput visible={modalIsVisible}
          addGoal={addGoalHandler}
          onCancel={endNewGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item, index }) => (
              courseGoals.length === 0
                ? <Text>No Goals Yet!</Text>
                : <GoalItem
                  text={item.value}
                  id={item.id}
                  onDelete={removeGoalHandler}
                />
            )}
          >
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5
  }
});
