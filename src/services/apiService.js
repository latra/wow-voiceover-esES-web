import config from '../config';

export const sendUpvote = async (voiceName) => {
  const response = await fetch(`${config.backendUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ voice: voiceName, vote: "upvote" })
  });
  return response.json();
};

export const sendDownvote = async (voiceName, reason) => {
  const response = await fetch(`${config.backendUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ voice: voiceName, reason, vote: "downvote" })
  });
  return response.json();
};
