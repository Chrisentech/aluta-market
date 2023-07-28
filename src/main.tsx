import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from "./store";
import {ApolloProvider} from  '@apollo/client'
import { Provider } from "react-redux";
import { apolloClient } from './Services/graphql/apolloClient.ts';
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
