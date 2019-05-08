// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.

// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.

// You may also assume that child records in the JSON will always be in a property called `children`.

//please don't use body-parser or express.json for challenge 2

const http = require('http');
const port = 3000;
const { parse } = require('querystring');


const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); //convet buffer to string
    });
    req.on('end', () => {
      console.log(body);
    });
    res.end('ok');
  } else {
    res.end(`<!DOCTYPE html>
    <html>
      <link href="styling.css" rel="stylesheet" type="text/css">
      <script src="app.js"></script>
      <head>
        <meta charset="utf-8">
        <title>CSV Report Generator</title>
        <h1>CSV Report Generator!</h1>
        <form action="http://127.0.0.1:8080/data" method="post">
            <textarea rows="5" cols="50" name="info">
                Add your JSON data here...
            </textarea>
            <input type="submit" value="submit" />
        </form>
      </head>
      <body>
      </body>
    </html>`)
  }
});

function convertToCsv(request, callback) {
  const FORM_URLENCODED = 'application/x-www-form-urlencoded';
  if(request.headers['content-type'] === FORM_URLENCODED) {
      let body = '';
      request.on('data', chunk => {
          body += chunk.toString();
      });
      request.on('end', () => {
          callback(parse(body));
      });
  }
  else {
      callback(null);
  }
}

server.listen(3000);
