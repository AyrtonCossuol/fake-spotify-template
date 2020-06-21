import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Album = () => {
    const [iconConfigure] = useState({
        size: 20,
        color: '#fff',
    });

    return (
        <SafeAreaView style={styles.Container}>
            <LinearGradient 
                style={styles.ContainerHeader} 
                colors={['#111', 'transparent', 'transparent', '#111']}
            >
                <Image style={styles.Photo} source={{ uri:"https://www.emaisgoias.com.br/wp-content/uploads/2020/02/jorge-mateus-audiomix-marcos-araujo-processo-31-milhoes-1200x1200.jpg" }} />
                <View style={styles.ContainerNavBar}>
                    <Icon name="arrow-left" {...iconConfigure} />
                    <View style={styles.GroupItemNavBar}>
                        <Text style={styles.ButtonFollow}>Seguindo</Text>
                        <Icon name="ellipsis-v" {...iconConfigure} />
                    </View>
                </View>

                <View style={styles.ContainerInfoBand}>
                    <Text style={styles.BandName}>Jorge e Mateus</Text>
                    <Text style={styles.BandFooter}>8.500.752 ouvintes mensais</Text>
                </View>
            </LinearGradient>

            <View style={styles.Content}>
                <TouchableOpacity colors="1DD15D" styles={styles.ButtonRandomOrder} onPress={() => {}}>
                    <Text styles={styles.ButtonRandomOrderText}>Ordem Aleatoria</Text>
                </TouchableOpacity>
                <Text styles={styles.InfoCategory}>Popular</Text>
            </View>
        </SafeAreaView>
    );
};

export default Album;