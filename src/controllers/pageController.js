import {
  fetchChannelByUsername,
  getChannelInfo,
  fetchLatestVideos,
} from "../api/index.js";

// Function to render the home page
// This function checks if a username exists and fetches channel data based on the username
const getHomePage = async (req, res) => {
  let isUsernameExists = true;
  let isChannelExists = true;

  const { username } = req.query;
  const channelData = await fetchChannelByUsername(username);
  if (!username) {
    isUsernameExists = false;
  }
  if (channelData?.length === 0) {
    isChannelExists = false;
  }

  res.render("Home", {
    channelData,
    isChannelExists,
    isUsernameExists,
    username,
  });
};

// Function to render the channel page
// This function fetches detailed channel information and the latest videos
const getChannelPage = async (req, res) => {
  const { id } = req.params;
  const channelData = await getChannelInfo(id);

  if (!channelData) {
    return;
  }

  const LatestVideos = await fetchLatestVideos(channelData.uploadsPlaylistId);
  // return res.send(LatestVideos);
  if (!LatestVideos) {
    return;
  }

  res.render("Channel", { channelData, LatestVideos });
};

export { getHomePage, getChannelPage };
