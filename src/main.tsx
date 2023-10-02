import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from "./store";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {ApolloProvider} from  '@apollo/client'
import { Provider } from "react-redux";
import { apolloClient } from './Services/graphql/apolloClient.ts';
import { __DEV__ } from '@apollo/client/utilities/globals';


if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
