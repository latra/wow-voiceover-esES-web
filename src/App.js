import React from 'react';
import voicesData from './data/voices.json';
import VoiceCard from './components/VoiceCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <h1>Voice Samples</h1>

      <div className="description">
        <p>¡Azeroth te necesita, héroe! Debido a la grandeza de World of Warcraft, nos resulta imposible verificar que todas las voces y audios se estén generando correctamente.</p>
        <p>Toda ayuda cuenta, por lo que agradecemos que nos ayudéis a identificar las voces que están dando más problemas a través de esta web para que podamos centrar esfuerzos en mejorar aquellas que dan peor resultado.</p>
        <p>Si por el contrario la voz se escucha bien pero una misión o interacción concreta da problemas, por favor, cread una Issue de GitHub <a href="https://github.com/latra/wow-webvoices-esES/issues/new?assignees=&labels=bug&projects=&template=audio_bug.md&title=%5BAUDIO%5D+Audio+incorrecto">aquí</a> para que podamos revisar y corregir ese audio manualmente.</p>
      </div>
      <div className="voice-list">
        {voicesData.voices.map((voice, index) => (
          <VoiceCard key={index} voice={voice} />
        ))}
      </div>
    </div>
  );
}

export default App;
