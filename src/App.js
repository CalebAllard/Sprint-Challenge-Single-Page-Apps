import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import DetailView from "./components/DetailView";
import {Route} from 'react-router-dom';

export default function App() {
  return (
    <main>
      
      <Route path="/" component={WelcomePage} exact  />
      <Route path="/characters" component={Header} exact />
      <Route path="/characters/:name" component={DetailView} exact/>
      
      {/* <Header /> */}
      
    </main>
  );
}
