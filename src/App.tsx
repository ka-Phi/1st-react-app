// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import Message from './message';
// import ListGroup from './components/ListGroup';
import Alert from './components/alert';
import Button from './components/Button';
import { useState } from "react";

function App() {
  // let items = [
  //   'DJAKARTA',
  //   'BOGOR',
  //   'DEPOK',
  //   'TANGGERANG',
  //   'BEKASI',
  // ];
  // const handleSelectItem = (item: string) =>{
  //   console.log(item);
  // }
  // return <div><ListGroup items={items} heading='cities' onSelectItem={handleSelectItem}/></div>
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Button color='primary' onClick={() => {setAlertVisibility(true)}}> 
        Say hii to alert!
      </Button>
      <div className='alert'>
        {alertVisible && <Alert onClose={() => {setAlertVisibility(false)}}>Hii too</Alert>}
      </div>
    </div>
  )
}
export default App