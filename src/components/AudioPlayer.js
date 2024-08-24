import React, { useState } from 'react';

const AudioPlayer = ({ folder, sampleCount = 3 }) => {
  const [samples, ] = useState(
    Array.from({ length: sampleCount }, (_, i) => `${folder}${i + 1}.mp3`)
  );
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
