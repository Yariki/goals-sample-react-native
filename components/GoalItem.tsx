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
        <View key={props.id} style={styles.goalItem}>
          <Pressable 
          android_ripple={{color:'#020a74'}} 
          style={({pressed}) => pressed && styles.pressedItem}
          onPress={deleteHandler}>
            <Text style={styles.goalText}>{props.text}</Text>
          </Pressable>
        </View>
    );
}


export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 10,
        backgroundColor: '#0313f7',
        borderColor: '#08025a',
        borderWidth: 1
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
        fontSize: 18,
        padding: 10,
      }
});