import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';   //hoja de estilos


const App = () => {

  const [videos,setVideos ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
    .then(response => response.json())
    .then(data => setVideos(data));
  },[])

  console.log(videos);

  return(
    
  <div className="App">
    <Header />
    <Search />
    {

    }

    <Categories title="Mi lista">
      <Carousel>
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
      </Carousel>
    </Categories>

    <Categories title="Recomendado">
      <Carousel>
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
      </Carousel>
    </Categories>

    <Categories title="Terror">
      <Carousel>
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
      </Carousel>
    </Categories>

    <Categories title="Acción y aventuras">
      <Carousel>
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
      </Carousel>
    </Categories>

    <Footer />
  </div>
  );
}

export default App;

