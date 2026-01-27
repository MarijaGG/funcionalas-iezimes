import { useState } from 'react'
import Translations from './Translations.jsx'
import FeatureIntro from './FeatureIntro.jsx';
import UserStory from "./UserStory.jsx";
import Scenarios from "./Scenarios.jsx";
import RubiksCube from "./RubiksCube.jsx";
import HappyPath from "./HappyPath.jsx";
import Avots from "./Avots.jsx";

import './App.css'

function App() {
  return (
    <div>
      <Translations />
      <FeatureIntro />
      <UserStory />
      <Scenarios />
      <RubiksCube />
      <HappyPath />
      <Avots />
    </div>
  );
}

export default App
