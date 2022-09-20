import { View, Image, Text } from "react-native";
import styles from "./styles";

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: 'http://github.com/fsampson30.png'}} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Flavio Sampson</Text>
                    <Text style={styles.subject}>Matemáica</Text>
                </View>
            </View>
        </View>
    )

}

export default TeacherItem;