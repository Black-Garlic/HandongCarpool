import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MyInfoScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.notice}>
                    MyInfoScreen
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notice: {
        marginBottom: 30,
        fontSize: 25,
    },
});