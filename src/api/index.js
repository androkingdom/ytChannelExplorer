import { fetchData } from "../utils/fetchData.js";
const API_KEY = process.env.API_KEY;

// Function to fetch channel information by username
// This function takes a username as input and returns channel information
const fetchChannelByUsername = async (username) => {
  if (!username) {
    return;
  }

  const searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(
    username
  )}&key=${API_KEY}`;

  const data = await fetchData(searchURL);
  if (!data) {
    return;
  }

  const channelsInfo = data.items.map((channels) => {
    const snippet = channels.snippet;
    return {
      id: snippet.channelId,
      title: snippet.channelTitle,
      description: snippet.description,
      logoUrl: snippet.thumbnails.medium.url,
    };
  });
  return channelsInfo;
};

// Function to get detailed channel information
// This function takes a channel ID as input and returns detailed channel information
const getChannelInfo = async (channelId) => {
  const detailsURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails&id=${channelId}&key=${API_KEY}`;

  const data = await fetchData(detailsURL);
  if (!data) {
    return;
  }

  const channel = data.items[0];
  const { title, description, thumbnails } = channel.snippet;
  const { videoCount, viewCount, subscriberCount } = channel.statistics;
  const uploadsPlaylistId = channel.contentDetails.relatedPlaylists.uploads;

  return {
    title,
    description,
    logoUrl: thumbnails.default.url,
    videoCount,
    viewCount,
    subscriberCount,
    uploadsPlaylistId,
  };
};

// Function to fetch the latest videos from a channel's uploads playlist
// This function takes a playlist ID as input and returns the latest videos
const fetchLatestVideos = async (playlistId) => {
  const videosURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${playlistId}&key=${API_KEY}`;

  const data = await fetchData(videosURL);
  if (!data) return;

  const videos = data.items.map((video) => {
    const snippet = video.snippet;
    return {
      id: snippet.resourceId.videoId,
      title: snippet.title,
      description: snippet.description,
      thumbnailUrl: snippet.thumbnails.medium.url,
    };
  });
  return videos;
};

export { fetchChannelByUsername, getChannelInfo, fetchLatestVideos };
