import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";


export interface GoalInputProps {
    addGoal: (goal: string) => void;
}

const GoalInput = (props: GoalInputProps) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText: string) {
        setEnteredGoal(enteredText);
    };

    function addGoalHandler() {

        if(!props.addGoal){
            return;
        }

        props.addGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={goalInputHandler}
          style={styles.textInput} placeholder="Your Course Goal!" 
          value={enteredGoal}
          />
        <Button 
          onPress={addGoalHandler}
          title="ADD GOAL" 
          />
      </View>);
}


export default GoalInput;

const styles = StyleSheet.create({
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

});