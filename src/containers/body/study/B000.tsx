import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { StudyCards, StudyInit } from '@containers/body/study';
import { Paths } from '@constants';

export default (props: React.ComponentProps<any>) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact component={StudyInit} />
      <Route path={Paths.ROUTE_PATHS[Paths.ROUTE_PATH_INDEX.StudyCard]} component={StudyCards} />
    </Switch>
  );
};
