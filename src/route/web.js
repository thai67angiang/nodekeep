import express from "express";
import homeControler from "../controllers/homeControllers";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeControler.getHomepage);
  router.get("/about", homeControler.getAboutPage);
  router.post("/create-keep", homeControler.postNewKeep);
  router.post("/delete-keepers", homeControler.postDeleteKeep);
  router.get("/edit-keepers/:id", homeControler.getHomepage);
  router.post("/update_keepers", homeControler.postUpdateKeep);

  return app.use("/", router);
};

module.exports = initWebRoutes;
