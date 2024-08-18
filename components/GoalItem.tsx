import { StyleSheet, View, Text } from "react-native";


export interface GoalItemProps {
  text: string;
  index: number
}

function GoalItem(props: GoalItemProps) {
    return (<View key={props.index} style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
  </View>);
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