const express = require("express");
const route = express.Router();

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Middleware in array![]
const csrfProtection = require("../app/middleware/CSRFMiddleware");
const upload = require("../app/middleware/multerMiddleware");

// Global middlware
// route.use(csrfProtection);

// Controller
const restController = require("../app/controllers/restController");

// Entry with prefix '/api/mevn'
route.get("/", restController.multipurpose);

// Endpoint
route.get("/mevn", restController.fetchAllPost);
route.post("/mevn/:id", restController.fetchPostByID);
route.post("/mevn", [upload], restController.createPost);
route.patch("/mevn/:id", [upload], restController.updatePost);
route.delete("/mevn/:id", restController.deletePost);

module.exports = route;
