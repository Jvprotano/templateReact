import './App.css';
import '../src/components/Navbar.css'
import Navbar from '../src/components/Navbar.js';
import { BrowserRouter as Router, Switch, Route }
  from 'react-router-dom'
import CoverSection from './components/CoverSection';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/footer';
import OurTeamSection from './components/OurTeamSection';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        <CoverSection></CoverSection>
      <WelcomeSection />
      </Router>
      <OurTeamSection/>

      <Footer/>
      
    </div>
  );
}

export default App;
