import express from "express"; // Import express
import dotenv from 'dotenv';  // Import dotenv


dotenv.config(); // Load environment variables from .env file
const app = express(); // Create an instance of express

// Middleware
app.use("/static", express.static("src/public")); // Serve static files from the public directory
app.use(express.json({ limit: "18kb" })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// set view engine 
app.set("view engine", "ejs");
app.set("views", "src/views");

const port = process.env.PORT || 5000; // Set the port from environment variables or default to 5000

// Import routers
import pageRouter from "./src/routers/pageRouter.js";

// Use routers
app.use("/", pageRouter);

app.listen(port, () => {
  console.log(`App is listing on http://localhost:${port}`);
});
