import * as React from 'react';
import { Route } from 'react-router';

import { Layout } from './components/Layout';
import Home from './components/Home/Home';
import Templates from './components/Templates/Templates';
import FetchData from './components/FetchData';

export default <Route component={Layout}>
    <Route path='/' components={{ body: Home }}/>
    <Route path='/templates' components={{ body: Templates }}/>
    <Route path='/fetchdata' components={{ body: FetchData }}>
        <Route path='(:startDateIndex)'/>
    </Route>
</Route>;
// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
