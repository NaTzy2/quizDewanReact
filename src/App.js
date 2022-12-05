import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Button from './component/button/Button';
import Input from './component/input/Input';

function App() {
  const [counter, setCounter] = useState(0)
  const [bb, setBb] = useState(0)
  const [tb, setTb] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [res, setRes] = useState('')

  const hari = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    "Jum'at",
    'Sabtu',
    'Minggu'
  ]

  const tambahHandler = ()=>{
    setCounter(counter + 1)
  }
  const kurangHandler = ()=>{
    setCounter(counter - 1)
  }
  const resetHandler = ()=>{
    setCounter(0)
  }

  const changeTb = (e)=>{
    setTb(e.target.value / 100)
  }
  const changeBb = (e)=>{
    setBb(e.target.value)
  }
  const getBmi = (e)=>{
    e.preventDefault()
    setBmi(bb / (tb * tb))
    
    if(bmi < 18.5){
      setRes('kurang berat badan')
    }else if(bmi >= 18.5 && bmi <= 22.9){
      setRes('normal')
    }else if(bmi >= 23 && bmi <= 24.9){
      setRes('kelebihan berat badan')
    }else if(bmi >= 25 && bmi <= 29.9){
      setRes('obsesitas tingkat 1')
    }else{
      setRes('obesitas tingkat 2')
    }
  }

  return (
    <div className="App">
      <h2>{counter}</h2>
      <Button count = {tambahHandler} nama = {'tambah'}/>
      {counter === 0 ? null : <Button count ={kurangHandler} nama = {'kurang'}/>}
      {counter !== 0 && <Button count ={resetHandler} nama = {'reset'}/>}

      <hr/>
      <h2>Nama-nama hari</h2>
      <select name="" id="hari">
        {hari.map((item, index)=>{
          return <option key = {index}>{item}</option>
        })}
      </select>

      <hr/>
      <h2>Kalkulator BMI</h2>
      <form onSubmit={getBmi}>
        <label>Tinggi Badan(cm):</label>
        <Input meas = {changeTb}/><br />
        <label>Berat Badan(kg):</label>
        <Input meas = {changeBb}/><br />
        <label>Index BMI anda:<i>{res}</i></label><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;