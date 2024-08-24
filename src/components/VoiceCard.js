import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import { sendUpvote, sendDownvote } from '../services/apiService';

const VoiceCard = ({ voice }) => {
  const [downvoteReason, setDownvoteReason] = useState('');

  const handleUpvote = async () => {
    await sendUpvote(voice.name);
    alert('Upvote sent!');
  };

  const handleDownvote = async () => {
    const reason = prompt('Please enter a reason for downvote:', downvoteReason);
    if (reason) {
      setDownvoteReason(reason);
      await sendDownvote(voice.name, reason);
      alert('Downvote sent!');
    }
  };

  return (
    <div className="voice-card card p-3 mb-3">
      <h3>{voice.name}</h3>
      <AudioPlayer folder={voice.folder} />
      <div className="d-flex justify-content-around mt-3">
        <button className="btn btn-success btn-small-text" onClick={handleUpvote}>
          <i className="bi bi-flag-fill"></i> Upvote
        </button>
        <button className="btn btn-danger btn-small-text" onClick={handleDownvote}>
          <i className="bi bi-flag"></i> Downvote
        </button>
      </div>
    </div>
  );
};

export default VoiceCard;
