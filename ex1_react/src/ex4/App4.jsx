// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ImageList from './ImageList';

const App = () => (
    <Provider store={store}>
        <ImageList />
    </Provider>
);

export default App;
