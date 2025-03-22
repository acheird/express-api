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


// PUT: Update a user by ID
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, role } = req.body;
    const user = users.find(u => u.id) === parseInt(id);

    if(!user){
        return res.status(404).json({ error: "User not found" });

        user.name = name || user.name;
        user.role = role || user.role;

        res.status(200).json(user);
    };
})

module.exports = router;