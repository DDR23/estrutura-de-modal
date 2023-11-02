"use client"
import Modal from '../components/Modal.jsx'
import './index.scss'
import { useState } from 'react';

export default function Home() {
  const [openPrimeiroModal, setOpenPrimeiroModal] = useState(false);
  const [openSegundoModal, setOpenSegundoModal] = useState(false);

  return (
    <>
      <div className="home">
        <div className="home__content">
          <h1>Esse é um miniprojeto feito para praticar o desenvolvimento de um MODAL</h1>
        </div>
        <div className="home__btns">
          <button onClick={() => setOpenPrimeiroModal(!openPrimeiroModal)}>primeiro modal</button>
          <button onClick={() => setOpenSegundoModal(!openSegundoModal)}>segundo modal</button>
        </div>
      </div>
      <div className="home__modal">
        <Modal isOpen={openPrimeiroModal} isClose={setOpenPrimeiroModal} titulo="Esse é meu primeiro modal" description="Aqui fica a descrição geral do meu primeiro modal"/>
        <Modal isOpen={openSegundoModal} isClose={setOpenSegundoModal} titulo="Esse é meu segundo modal" description="Aqui fica a descrição geral do meu segundo modal"/>
      </div>
    </>
  )
}