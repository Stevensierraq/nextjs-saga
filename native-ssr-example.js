// This code doesn't works, is only an example to show how works nextjs.
const { Server } = require('http');
const createExpressServer = require('express');
const { renderToString } = require('react-dom/server');
const HomeLayout = require('.UI/components/layout');

const server = createExpressServer();
const http = Server(server);

server.get('/bicyclecard', (req, res) => {
    const ssrHtml = renderToString(HomeLayout);
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>My financial App</title>
        </head>
        <body>
            <div id="root">${ssrHtml}</div>
            <script>
                ReactDOM.hydrate(HomeLayout, document.getElementById('root'))
            </script>
        </body>
        </html>
    `;
});


http.listen(port, () => console.log(`Listening on *:${port}`));