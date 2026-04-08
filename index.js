const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('DevOps Pipeline Working 🚀');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;