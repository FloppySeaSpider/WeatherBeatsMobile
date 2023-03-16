import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { evaTheme, evaMapping } from './eva';
import { Provider } from 'react-redux';
import Main from './src/containers/Main';
import { store } from './redux/store';

const App = () => {
  return (
    <ApplicationProvider
      mapping={evaMapping}
      theme={evaTheme}
    >
    <Provider store={store}>
      <Main />
    </Provider>
    </ApplicationProvider>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
