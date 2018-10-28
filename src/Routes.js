import React, {lazy, Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loaders';


const Account = lazy(() => import('./Account'));
const NewCourse = lazy(() => import('./NewCourse'));

export default function() {
  return (
    <Suspense fallback={<Loader type="ball-rotate" color="#000000" />}>
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/new-course" component={NewCourse} />
      </Switch>
    </Suspense>
  );
}