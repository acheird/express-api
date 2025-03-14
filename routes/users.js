const express = require("express");
const router = express.Router();

const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Charlie", role: "Editor" }
];

router.get("/", (req, res) => {
    res.status(200).json(users);
});

module.exports = router;