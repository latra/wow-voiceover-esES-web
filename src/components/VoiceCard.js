import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import DownvoteModal from './DownvoteModal';
import { sendUpvote, sendDownvote } from '../services/apiService';
import { toast } from 'react-toastify';

const VoiceCard = ({ voice }) => {
  const [showModal, setShowModal] = useState(false);

  const handleUpvote = async () => {
    try {
      await sendUpvote(voice.name);
      toast.success('Upvote sent successfully!');
    } catch (error) {
        console.log(error);
        
      toast.error('Failed to send upvote.');
    }
  };

  const handleDownvote = async (reasons) => {
    try {
      await sendDownvote(voice.name, reasons.join(', '));
      toast.success('Downvote sent successfully!');
    } catch (error) {
      toast.error('Failed to send downvote.');
    }
  };

  return (
    <div className="voice-card card p-3 mb-3">
      <h3>{voice.name}</h3>
      <div className="audio-controls">
        <AudioPlayer folder={voice.folder} />
      </div>
      <div className="voice-card-footer">
        <button className="btn btn-success btn-sm" onClick={handleUpvote}>
          <i className="bi bi-flag-fill"></i> Upvote
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => setShowModal(true)}>
          <i className="bi bi-flag"></i> Downvote
        </button>
      </div>

      <DownvoteModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSubmit={handleDownvote}
      />
    </div>
  );
};

export default VoiceCard;
