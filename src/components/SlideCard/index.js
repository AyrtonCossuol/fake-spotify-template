import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';

import Card from '../Card';

const SlideCard = ({ slide }) => {
    return (
       <View style={[ styles.Container, {paddingTop: 5 }]}>
           <Text style={styles.Title}>{slide.title}</Text>

            <ScrollView 
                style={styles.SlideScroll}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                { slide.items && slide.items.map((item, index) => (
                    <Card key={index} item={item} />
                )) }
            </ScrollView>
       </View>
    );
};

export default SlideCard;