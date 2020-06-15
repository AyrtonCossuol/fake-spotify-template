import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

const TabBar = () => {
  const [iconConfigure] = useState({
    color: '#fff',
    size: 25,
  });

  return (
    <View style={styles.Container}>
      <View style={styles.SubContainer}>
        <View style={styles.GroupAction}>
          <Icon name="home" {...iconConfigure} />
          <Text style={styles.ActionName}>Inicio</Text>
        </View>

        <View style={styles.GroupAction}>
          <Icon name="search" {...iconConfigure} />
          <Text style={styles.ActionName}>Buscar</Text>
        </View>

        <View style={styles.GroupAction}>
          <Icon name="book-reader" {...iconConfigure} />
          <Text style={styles.ActionName}>Suas Bibliotecas</Text>
        </View>
      </View>
    </View>
  );
};

export default TabBar;