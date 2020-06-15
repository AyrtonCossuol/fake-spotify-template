import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';

import SlideCard from '../../components/SlideCard';
import Mock from '../../services/mock';

const Main = () => {
    const [slides, setSlides] = useState([]);

    const onFetchSlides = async () => {
        let response = await Mock.fetchSlides();

        setSlides(response);
    }

    useEffect(() => {
        onFetchSlides();
    }, [])

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                { slides && slides.map((slide, index) => (
                    <SlideCard key={index} slide={slide} />
                )) }
            </ScrollView>
        </SafeAreaView>
    );
};

export default Main;