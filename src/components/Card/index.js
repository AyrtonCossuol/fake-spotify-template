import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Card = ({ item }) => {
    return (
        <View style={styles.Container}>
            <Image source={{ uri: item.photo }} style={styles.Photo} />
            <View style={styles.ContainerSubtitle}>
                <Text style={styles.SubtitleTitle}>{item.subtitle.title}</Text>
                <Text style={styles.SubtitleDescription}>{item.subtitle.description}</Text>
            </View>
        </View>
    );
};

export default Card;