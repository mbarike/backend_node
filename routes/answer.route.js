const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/answer.controller");
const auth = require("../middleware/auth.middleware");

router.post("/:questionId", auth, ctrl.createAnswer);
router.get("/:questionId", ctrl.getAnswers);

module.exports = router;