import * as React from 'react';
import { Route } from 'react-router';

import { Layout } from './components/Layout';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Templates from './components/pages/Templates/Templates';
import NewTemplate from './components/pages/NewTemplate/NewTemplate';
import ViewTemplate from './components/pages/ViewTemplate/ViewTemplate';
import Config from './components/pages/Config/Config';
import FetchData from './components/FetchData';

export default <Route component={Layout}>
    <Route path='/' components={{ body: Dashboard }}/>
    <Route path='/templates' components={{ body: Templates }}/>
    <Route path='/fetchdata' components={{ body: FetchData }}>
        <Route path='(:startDateIndex)'/>
    </Route>
    <Route path='/newtemplate' components={{ body: NewTemplate }}/>
    <Route path='/viewtemplate' components={{ body: ViewTemplate }}>
        <Route path='(:templateId)'/>
    </Route>
    <Route path='/config' components={{ body: Config }}/>
</Route>;
// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
