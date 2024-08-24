import config from '../config';

export const sendUpvote = async (voiceName) => {
  const response = await fetch(`${config.backendUrl}/upvote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ voice: voiceName })
  });
  return response.json();
};

export const sendDownvote = async (voiceName, reason) => {
  const response = await fetch(`${config.backendUrl}/downvote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ voice: voiceName, reason })
  });
  return response.json();
};
