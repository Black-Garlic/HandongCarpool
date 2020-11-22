import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        name: "",
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login Screen</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({name : text})}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Agreement', {name : this.state.name})}
                >
                    <Text>
                        시작하기
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: { // TextInput
        borderWidth:2,
        width: 200,
        fontSize: 30,
    },
});