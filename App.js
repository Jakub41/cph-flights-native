import React from 'react';
import Routes from "./Routes";
import { View } from "react-native";
import { Provider } from 'react-redux';
import Store from './App/Store';

const App = () => (
    <Provider store={Store}>
        <View style={{ flex: 1 }}>
            <Routes />
        </View>
    </Provider>
);

export default App

