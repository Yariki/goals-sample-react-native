import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,
        Text,
        View,
        Button,
        TextInput,
        ScrollView,
      FlatList} from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function goalInputHandler(enteredText: string) {
    setEnteredGoal(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={goalInputHandler}
          style={styles.textInput} placeholder="Your Course Goal!" 
          />
        <Button 
          onPress={addGoalHandler}
          title="ADD GOAL" 
          />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals}
          renderItem={({item, index}) => (
              courseGoals.length === 0 
              ? <Text>No Goals Yet!</Text> 
              : <View key={index} style={styles.goalItem}>
                  <Text style={styles.goalText}>{item}</Text>
                </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBlockColor: '#cccccc'
  },
  textInput: {
    borderWidth:1,
    borderColor: '#cccccc',
    width: ' 70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    marginBottom: 8, 
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#f0f0f0'
  },
  goalText: {
    color: 'black'
  }
});
