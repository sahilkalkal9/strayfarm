import { Route, Routes } from 'react-router-dom';
import './global.scss';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Donate from './components/donate/donate';
import About from './components/about/about';
import Contact from './components/contact/contact';
import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import Feedback from './components/feedback/feedback';
import PrivacyT from './components/privacy/privacy';
import Terms from './components/terms/terms';
import Refund from './components/refund/refund';
import Nopage from './components/404/404';
import Memories from './components/memories/memories';
import FirstAid from './components/firstAid/firstAid';
import Blogs from './components/blogs/blogs';



firebase.initializeApp({
  apiKey: "AIzaSyDf6dWO1MwWW54sYmtDSp37oiLgXCVN8kY",
  authDomain: "strayfarm-7a2d3.firebaseapp.com",
  projectId: "strayfarm-7a2d3",
  storageBucket: "strayfarm-7a2d3.appspot.com",
  messagingSenderId: "174853494319",
  appId: "1:174853494319:web:32cf7addd40bc12aabd8da"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {


  const [readMore, setReadMore] = useState(false)


  return (
    <div className="App">
      <Nav />

      <div className='app-lower'>
        <Routes>
          {/* <Route path='*' element={<Nopage />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/first-aid" element={<FirstAid />} /> */}
          {/* <Route path="/memories" element={<Memories />} /> */}
          {/* <Route path="/privacy-policy" element={<PrivacyT />} /> */}
          {/* <Route path="/terms" element={<Terms />} /> */}
          {/* <Route path="/refund-policy" element={<Refund />} /> */}
          {/* <Route path="/reviews" element={<Feedback />} /> */}
        </Routes>




      </div>
      <Footer />
    </div>
  );
}

export default App;
