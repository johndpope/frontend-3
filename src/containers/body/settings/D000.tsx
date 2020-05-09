import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SettingsInit } from '@containers/body/settings';
import { State } from '@models';
import { useSelector } from 'react-redux';

const router = (state: State) => state.get('router');

export default (props: React.ComponentProps<any>) => {
  const {
    location: { pathname },
  } = useSelector(router);

  return (
    <React.Fragment>
      <Switch>
        <Route path={pathname} exact component={SettingsInit} />
        {/* <Route path={ROUTE_PATHS[ROUTE_PATH_INDEX.StudyFinish]} component={StudyFinish} /> */}
      </Switch>
      <Route children={props.children} />
    </React.Fragment>
  );
};
