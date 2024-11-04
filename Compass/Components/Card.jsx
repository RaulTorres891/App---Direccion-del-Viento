import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ header, footer, children, style }) => {
    return (
        <View style={[styles.card, style]}>
            <View style={styles.header}>
                {header}
            </View>
            <View style={styles.content}>
                {children} 
            </View>
            <View style={styles.footer}>
                {footer}
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#eaCCad',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
    },
    header: {
        alignItems: 'center',
        marginBottom: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        alignItems: 'center',
        marginTop: 10,
    },
});

