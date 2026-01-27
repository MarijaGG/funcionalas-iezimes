import { useState } from 'react'
import Translations from './Translations.jsx'
import FeatureIntro from './FeatureIntro.jsx';
import UserStory from "./UserStory.jsx";
import Scenarios from "./Scenarios.jsx";
import RubiksCube from "./RubiksCube.jsx";
import HappyPath from "./HappyPath.jsx";

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
    </div>
  );
}

export default App
