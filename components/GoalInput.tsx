import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Image } from "react-native";


export interface GoalInputProps {
    addGoal: (goal: string) => void;
    visible: boolean;
    onCancel: () => void;
}

const GoalInput = (props: GoalInputProps) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText: string) {
        setEnteredGoal(enteredText);
    };

    function addGoalHandler() {

        if (!props.addGoal) {
            return;
        }

        props.addGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image  
                    style={styles.image}
                    source={require('../assets/images/goal.png')} />
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput} placeholder="Your Course Goal!"
                    value={enteredGoal}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel"
                            onPress={props.onCancel}
                            color="#f31282"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={addGoalHandler}
                            title="ADD GOAL"
                            color="#5e0acc"
                        />
                    </View>
                </View>
            </View>

        </Modal>);
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311bcb'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    }
});