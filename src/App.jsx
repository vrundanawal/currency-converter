import { useState } from 'react'
import{InputBox} from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to,setTo] = useState('inr');
  const[convertedAmount, setConvertedAmount]= useState(0)


  return (
    <>
    <h1 className='text-3xl bg-orange-500'>Currency-app</h1>
    </>
  )
}

export default App
