import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AgreementScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.route.params.name,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.name}</Text>
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
});