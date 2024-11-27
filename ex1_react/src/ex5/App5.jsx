// App5.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ImageList from './ImageList2';

const App5 = () => (
    <Provider store={store}>
        <ImageList />
    </Provider>
);

export default App5;
