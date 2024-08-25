import React, { useState } from 'react';
import voicesData from './data/voices.json';
import VoiceCard from './components/VoiceCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Filtrar las voces basado en el término de búsqueda y el estado
  const filteredVoices = voicesData.voices.filter(voice => {
    const matchesSearchTerm = voice.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || voice.status === parseInt(statusFilter);
    return matchesSearchTerm && matchesStatus;
  });
  return (
    <div className="App">
      <ToastContainer />
      <h1>Voice Samples</h1>

      <div className="description">
        <p>¡Azeroth te necesita, héroe! Debido a la grandeza de World of Warcraft, nos resulta imposible verificar que todas las voces y audios se estén generando correctamente.</p>
        <p>Toda ayuda cuenta, por lo que agradecemos que nos ayudéis a identificar las voces que están dando más problemas a través de esta web para que podamos centrar esfuerzos en mejorar aquellas que dan peor resultado.</p>
        <p>Si por el contrario la voz se escucha bien pero una misión o interacción concreta da problemas, por favor, cread una Issue de GitHub <a href="https://github.com/latra/wow-webvoices-esES/issues/new?assignees=&labels=bug&projects=&template=audio_bug.md&title=%5BAUDIO%5D+Audio+incorrecto">aquí</a> para que podamos revisar y corregir ese audio manualmente.</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar voces..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="status-filter"
        >
          <option value="">Todos los estados</option>
          <option value="0">Estado desconocido</option>
          <option value="1">Buen estado</option>
          <option value="2">Necesita mejorar</option>
          <option value="3">Muy deficiente</option>
        </select>
      </div>

      <div className="voice-list">
        {filteredVoices.map((voice, index) => (
          <VoiceCard key={index} voice={voice} />
        ))}
      </div>
    </div>
  );
}

export default App;
