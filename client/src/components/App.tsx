import axios from 'axios'
import { useEffect } from 'react';
import '../assets/styles/App.scss'
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';


function App() {

  return (
    <>
        <Header />
        <MainContent />
        <Footer />
    </>
  )
}

export default App
