import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ folder, sampleCount = 3 }) => {
  const [samples, setSamples] = useState([]);
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);

  useEffect(() => {
    // Generar la lista de archivos .ogg basada en el número de samples disponibles
    const generatedSamples = Array.from(
      { length: sampleCount },
      (_, i) => `${folder}${i + 1}.mp3`
    );
    setSamples(generatedSamples);
  }, [folder, sampleCount]);

  const nextSample = () => {
    setCurrentSampleIndex((prevIndex) => (prevIndex + 1) % samples.length);
  };

  return (
    <div>
      {samples.length > 0 && (
        <>
          <audio controls src={samples[currentSampleIndex]} />
          <button onClick={nextSample} className='btn-small-text'>
          <i class="bi bi-arrow-right-circle-fill"></i>
          </button>
          <p>
            {currentSampleIndex + 1}/{samples.length}
          </p>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
