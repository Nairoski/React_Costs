import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Project from './components/pages/Project';


function App() {
  return (
    <Router>
      

      <Navbar />

      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/projects" element={<Projects />} exact />
            <Route path="/contato" element={<Contato />} />
            <Route path="/company" element={<Company />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/project/:id" element={<Project />} exact />
        </Routes>
      </Container>

      <Footer />
    </Router>
    
  );
}

export default App;
