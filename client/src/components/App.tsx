import axios from 'axios'
import { useEffect } from 'react';
import '../assets/styles/App.scss'
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';


function App() {

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/', {withCredentials: true});
            
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


  return (
    <>
        <Header />
        <MainContent />
        <Footer />
    </>
  )
}

export default App
