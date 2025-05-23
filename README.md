# YouTube Channel Explorer

YouTube Channel Explorer is a web application that allows users to search for YouTube channels, view detailed channel statistics, and explore recent videos. It provides an intuitive interface for discovering and analyzing YouTube content creators.

## Features

- Search for YouTube channels by name or keyword
- View channel details: subscriber count, total views, description, and more
- Browse recent videos from selected channels
- Responsive and user-friendly UI
- Error handling and informative feedback

## Technologies Used

- **Frontend:** EJS, CSS/Styled Components
- **APIs:** YouTube Data API v3

## Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- YouTube Data API key

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ytChannelExplorer.git
    cd ytChannelExplorer
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the root directory.
    - Add your YouTube Data API key:
      ```
      YOUTUBE_API_KEY=your_api_key_here
      ```

4. **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Open your browser:**
    - Visit `http://localhost:3000`

## How It Works

1. **Search:** Enter a channel name or keyword in the search bar.
2. **Browse Results:** The app fetches matching channels using the YouTube Data API.
3. **View Details:** Click on a channel to see detailed statistics and recent uploads.
4. **Explore Videos:** Browse and watch recent videos directly from the app.

## Folder Structure

```
D:.
│   .env
│   .gitignore
│   app.js
│   package-lock.json
│   package.json
│   README.md
│
└───src
    ├───api
    │       index.js
    │
    ├───controllers
    │       pageController.js
    │
    ├───public
    │   └───js
    │           script.js
    │
    ├───routers
    │       pageRouter.js
    │
    ├───utils
    │       fetchData.js
    │
    └───views
        │   Channel.ejs
        │   Home.ejs
        │
        └───partials
                channelMetaData.ejs
                ChannelPreviewCard.ejs
                Form.ejs
                GetAllChannel.ejs
                LatestVideoCard.ejs
                LatestVideos.ejs
                SingleChannelCard.ejs

```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [YouTube Data API](https://developers.google.com/youtube/v3)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

## Deploy

[![Deploy on Render](https://img.shields.io/badge/Render-Deployed-blue)](https://your-deployment-url.render.com)
