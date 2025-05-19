import { Router } from "express";
import { getHomePage, getChannelPage } from "../controllers/pageController.js";

const pageRouter = Router(); // Create a new router instance

pageRouter.route("/").get(getHomePage); // Define the route for the home page

// Define the route for the channel page
// The route will match /channel/:id, where :id is a dynamic parameter
pageRouter.route("/channel/:id").get(getChannelPage); 

export default pageRouter;
 