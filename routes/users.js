const express = require("express");
const router = express.Router();

const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Charlie", role: "Editor" }
];

// GET: Fetch all users
router.get("/", (req, res) => {
    res.status(200).json(users);
});

// POST: Add a new user
router.post("/", (req, res) => {
    const { name, role } = req.body;

    if (!name || !role ) {
        return res.status(400).json({ error: "Name and role are required" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        role
    };

    users.push(newUser);
    res.status(201).json(newUser);
})

module.exports = router;