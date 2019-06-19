import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './src/store';
import Router from './src/Router';
import { register } from './src/serviceWorker';
import theme from './src/Theme';
import { MuiThemeProvider } from '@material-ui/core';
import Amplify, { API, Auth, Analytics } from 'aws-amplify';
import { GROUP_ID, C006_URL, API_NAME, API_URL } from '@constants/Consts';

// 分析禁止
Analytics.disable();

Amplify.configure({
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'ap-northeast-1:af0c0560-0919-4c0e-8783-3e391475df79',

    // REQUIRED - Amazon Cognito Region
    region: 'ap-northeast-1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'ap-northeast-1_LuLeXoUA1',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '15s1vvvj342mgioro8obb8800c',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    // cookieStorage: {
    //   // REQUIRED - Cookie domain (only required if cookieStorage is provided)
    //   domain: '.localhost',
    //   // OPTIONAL - Cookie path
    //   path: '/',
    //   // OPTIONAL - Cookie expiration in days
    //   expires: 365,
    //   // OPTIONAL - Cookie secure flag
    //   // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
    //   secure: true,
    // },
  },
  API: {
    endpoints: [
      {
        name: API_NAME,
        endpoint: API_URL,
        region: 'ap-northeast-1',
      },
    ],
  },
});

const provider = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

const root = document.getElementById('root');

const start = async () => {
  // const result = await Auth.signUp({
  //   username: 'wwalpha',
  //   password: 'session10',
  //   attributes: {
  //     email: 'wwalpha@gmail.com',
  //   },
  // });

  // const result = await Auth.confirmSignUp('wwalpha', '369899');

  await Auth.signIn({
    username: 'wwalpha',
    password: 'session10',
  });

  // const res = await API.get('api', C006_URL(GROUP_ID), {});

  render(provider, root);

  register();
};

start();
