//mport { useRoutes } from 'react-router-dom';
import Developers from '../Developers';
/*import Home from '../Home';

import Tutorials from '../Tutorials';*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './App.css'


function App() {
  const settings = {

    dots: true,
    infinite: true,
    speed: 2000,
    slideToShow: 3,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return(
    <>
    {/* <h1 className="bg-red-200 mb-4"> Hola clase </h1>
    <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={()=> window.open('https://tailwindcss.com/', '_blank')} > Help me</button> */}
 
    {/* <div class="grid grid-cols-10 gap-2">
      <div class="bg-violet-50 aspect-square"></div>
      <div class="bg-violet-100 aspect-square"></div>
      <div class="bg-violet-200 aspect-square"></div>
      <div class="bg-violet-300 aspect-square"></div>
      <div class="bg-violet-400 aspect-square"></div>
      <div class="bg-violet-500 aspect-square"></div>
      <div class="bg-violet-600 aspect-square"></div>
      <div class="bg-violet-700 aspect-square"></div>
      <div class="bg-violet-800 aspect-square"></div>
      <div class="bg-violet-900 aspect-square"></div>
    </div> */}
    <div className='w-3/4 m-auto mt-4 mb-4'>
       <div className='mt-30'>
          <Slider {...settings}>
            {data.map((d) => (
              <div key = {d.name} className='bg-white h-[300px] text-black rounded-xl'>
                <img src={d.img} alt="" className='h-44 w-44 rounded-full my-auto mx-auto mt-4' />
                <div/>
                <div className='flex flex-col item-center justify-top gap-5 p-5'></div>
                  <p className='text-xl font-semibold'>{d.name}</p>
                  <p className='text-center>{d.review}'></p>
                  <button className='bg-indigo-400 text-white text-lg px-4'>Mis tutoriales</button>
                </div>
              )
            )}
          </Slider> 
       </div>   
    </div>
    <Developers />
    </>
  )
}

const data = [
  {
    name:`Brais`,
    img:`../src/assets/Fotos/perfil-brais.png`,
    review:`Desarrollador y creador de contenido`
  },

  {
    name:`Goku`,
    img:`../src/assets/Fotos/perfil-goku.png`,
    review:`Protagonista de un anime`
  },

  {
    name:`Chepe Fortuna`,
    img:`../src/assets/Fotos/perfil-chepe.png`,
    review:`Novela de RCN`
  },

  {
    name:`Messi Chiquito`,
    img:`../src/assets/Fotos/perfil-messi.png`,
    review:`Campeon mundial`
  }
]

export default App

