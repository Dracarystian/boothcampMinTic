import '../../App.css';
import Table from '../Components/Table.jsx'



function index() {

  return (
    <>
      <div>
        <h1 className='font-bold mb-4'>Hola mundo</h1>
      </div>

      <div class="grid grid-cols-10 gap-2">
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
      </div>

      <button className='bg-sky-400 font-bold py-4 px-4 rounded text-white my-4 hover:bg-sky-700' onClick={()=> window.open('https://youtube.com')}> Tutoriales </button>
      

    </>

  )
}

export default index