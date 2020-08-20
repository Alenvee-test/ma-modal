import React, {useState, useEffect} from 'react';
import AboutMenu from '../components/AboutMenu';
import AboutContent from '../components/AboutContent';
import AboutModal from '../components/AboutModal';

function AboutPage() {
    const [isVisable, setIsVisable] = useState(false)
    const [counter, setCounter] = useState(0)
    

    useEffect(() => {
      // закрытие модалки - совершать действие с каунтером (например обнулять)
      // значения каунтера 10 и выше - открывать модалку
   }, [isVisable, counter])

    return (
        <div className="about-page">
         <AboutMenu 
            counter={counter}
            setCounter={setCounter}
            isVisable={isVisable}
            setIsVisable={setIsVisable}
         />
         <AboutContent 
            counter={counter}
         />
         <AboutModal 
            isVisable={isVisable}
            setIsVisable={setIsVisable}
         />
        </div>
    );
}

export default AboutPage;