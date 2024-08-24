import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import DownvoteModal from './DownvoteModal';
import { toast } from 'react-toastify';
import { sendUpvote, sendDownvote } from '../services/apiService';

const VoiceCard = ({ voice }) => {
  const [showModal, setShowModal] = useState(false);

  const handleUpvote = async () => {
    try {
      var loading_toast = toast.loading('Sending vote...');
      await sendUpvote(voice.name);
      toast.dismiss(loading_toast)
      toast.success(`Upvote sent for voice: ${voice.name}`);
    } catch (error) {
      console.error('Error sending upvote:', error);
      toast.success('Failed to send upvote. Please try again.');
    }
  };

  const handleDownvote = async (reasons) => {
    try {
      var loading_toast = toast.loading('Sending vote...');
      await sendDownvote(voice.name, reasons.join(', '));
      toast.dismiss(loading_toast)

      toast.success(`Downvote sent for voice: ${voice.name}`);
    } catch (error) {
      console.error('Error sending downvote:', error);
      toast.success('Failed to send downvote. Please try again.');
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
