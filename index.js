const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hello, World</h1>');
    }
});
const PORT = process.env.PORT || 8080;
// comment
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
