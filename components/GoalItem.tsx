import { StyleSheet, View, Text, Pressable } from "react-native";

export interface GoalItemProps {
  text: string;
  id: string;
  onDelete: (goalId: string) => void;
}

function GoalItem(props: GoalItemProps) {

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
      <Pressable onPress={deleteHandler}>
        <View key={props.id} style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    </Pressable>);
}


export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      },
      goalText: {
        fontSize: 18
      }
});