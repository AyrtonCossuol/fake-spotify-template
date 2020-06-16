import React from 'react';
import { StatusBar } from 'react-native';

import Main from './src/pages/Main';
import Album from './src/pages/Album';
import TabBar from './src/components/TabBar';

const App = () => {
  return(
    <React.Fragment>  
      <StatusBar barStyle="light-content" />
      <Album />
      <TabBar />
    </React.Fragment>
  );
};

export default App;