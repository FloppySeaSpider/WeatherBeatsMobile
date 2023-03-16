import React from 'react';
import WebView from 'react-native-webview';

function Player() {
  // const { token, playlist } = useSelector((state) => state.updater);
  const playlistId = "37i9dQZF1DX0kbJZpiYdZl"
  const token = "asfd"

  return (
    <WebView
      source={{ uri: `https://open.spotify.com/embed/playlist/${playlistId}` }}
      style={{ width: 360, height: 200, backgroundColor: 'transparent' }}
    />
  );
}

export default Player;
