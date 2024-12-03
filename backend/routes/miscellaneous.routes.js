// routes/miscellaneous.routes.js
import { Router } from "express";
import { contactUs, stats } from "../controllers/miscellaneous.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the homepage route");
});

router.post("/contact", contactUs);
router.get("/admin/stats/users", stats);

export default router;
