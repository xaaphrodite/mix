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

// Controller
const restController = require("../app/controllers/restController");

// Entry with prefix '/api/mevn'
route.get("/", [csrfProtection], restController.multipurpose);

// Endpoint
route.get("/mevn", [csrfProtection], restController.fetchAllPost);
route.get("/mevn/:id", [csrfProtection], restController.fetchPostByID);
route.post("/mevn", [csrfProtection, upload], restController.createPost);
route.patch("/mevn/:id", [csrfProtection, upload], restController.updatePost);
route.delete("/mevn/:id", [csrfProtection], restController.deletePost);

module.exports = route;
