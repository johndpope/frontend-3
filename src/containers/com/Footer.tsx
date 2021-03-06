import * as React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, makeStyles, Theme, createStyles } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Actions } from '@actions/app';
import { State } from '@models';
import { Paths } from '@constants';

const useStyles = makeStyles(({ palette: { primary }, spacing }: Theme) =>
  createStyles({
    root: {
      bottom: '0',
      width: '100%',
      height: spacing(9),
      // backgroundColor: primary.light,
      alignItems: 'flex-start',
      position: 'fixed',
    },
    action: {
      paddingTop: '8px !important',
      minWidth: 'inherit',
    },
    icon: {
      // color: 'white',
      fontSize: '3rem',
    },
  })
);

const getApp = (state: State) => state.get('app');

export default () => {
  // styles
  const classes = useStyles();
  // actions
  const actions = bindActionCreators(Actions, useDispatch());
  // reducer
  const { tabIndex, showHeader } = useSelector(getApp);

  // Bottom menu clicked
  const handleChange = (_: any, value: any) => actions.tabChange(Number(value));

  if (!showHeader) return null;

  return (
    <BottomNavigation value={tabIndex} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction
        className={classes.action}
        value={Paths.ROUTE_PATH_INDEX.Groups}
        icon={<HomeIcon className={classes.icon} />}
        component={React.forwardRef((props: any, ref: any) => (
          <Link to={Paths.ROUTE_PATHS[Paths.ROUTE_PATH_INDEX.Groups]} {...props} />
        ))}
      />
      {/* <BottomNavigationAction
        className={classes.action}
        value={Paths.ROUTE_PATH_INDEX.MyPage}
        icon={<PersonIcon className={classes.icon} />}
        component={React.forwardRef((props: any, ref: any) => (
          <Link to={Paths.ROUTE_PATHS[Paths.ROUTE_PATH_INDEX.MyPage]} {...props} />
        ))}
      /> */}
      {/* <BottomNavigationAction
        className={classes.action}
        value={Paths.ROUTE_PATH_INDEX.Regist}
        icon={<CameraIcon className={classes.icon} />}
        disableRipple
        disableTouchRipple
        component={React.forwardRef((props: any, ref: any) => (
          <Link to={Paths.ROUTE_PATHS[Paths.ROUTE_PATH_INDEX.Regist]} {...props} />
        ))}
      /> */}
      <BottomNavigationAction
        className={classes.action}
        value={Paths.ROUTE_PATH_INDEX.Settings}
        icon={<SettingsIcon className={classes.icon} />}
        component={React.forwardRef((props: any, ref: any) => (
          <Link to={Paths.ROUTE_PATHS[Paths.ROUTE_PATH_INDEX.Settings]} {...props} />
        ))}
      />
    </BottomNavigation>
  );
};
