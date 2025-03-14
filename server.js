const app = require("./app");
const PORT = 3000;

app.liste(PORT, () => {
    console.log(`Server running on http://localohost:${PORT}`);
})