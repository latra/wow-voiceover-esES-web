import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ folder, sampleCount = 3 }) => {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    // Generar la lista de archivos .ogg basada en el número de samples disponibles
    const generatedSamples = Array.from(
      { length: sampleCount },
      (_, i) => `${folder}${i + 1}.mp3`
    );
    setSamples(generatedSamples);
  }, [folder, sampleCount]);

  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);

  const nextSample = () => {
    setCurrentSampleIndex((prevIndex) => (prevIndex + 1) % samples.length);
  };

  return (
    <div>
      {samples.length > 0 && (
        <>
          <audio controls src={samples[currentSampleIndex]} />
          <div className="audio-navigation d-flex justify-content-between align-items-center mt-2">
            <span>
              {currentSampleIndex + 1}/{samples.length}
            </span>
            <button
              className="btn btn-secondary btn-sm"
              onClick={nextSample}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
