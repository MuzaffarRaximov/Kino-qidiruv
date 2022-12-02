import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import axios from 'axios'
import Empty from './components/Empty'

export default function App() {
  const [data, setData] = useState();
  function getData(data) {
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=84d5e5c4&s=${data}`)
      .then(response => setData(response.data))
      .catch(err => console.log(err))
  }
  return (
    <>
      <Navbar getData={getData} />
      {data ? <Main data={data} /> : <Empty />}
      <Footer />
    </>
  )
}
