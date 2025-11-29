import axios from 'axios'
import { useEffect } from 'react';
import '../assets/css/App.css'


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
        <div>
            TaskApp
        </div>
    </>
  )
}

export default App
