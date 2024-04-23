import { fab } from '@fortawesome/free-brands-svg-icons';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Projects from './components/Projects/Projects';

function App() {
  library.add(fab, faCommentDots);
  return (
    <div className="App h-full w-full">
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
