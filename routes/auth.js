const router = require("express").Router();
const tokenCtrl = require("../controllers/token");

router.get("/token", tokenCtrl.getToken);

module.exports = router;
