import React from 'react'
import ReactDOMServer from 'react-dom/server';

const App = () => {
  return <div>Hello React!</div>;
}

const handleEvent = (event) => {
  const body = ReactDOMServer.renderToString(
    <html>
      <body>
        <div id="app">
          <App />
        </div>
      </body>
    </html>
  )

  return new Response(body, {
    headers: { 'content-type': 'text/html' },
  })
}


addEventListener("fetch", event => {
  event.respondWith(handleEvent(event))
})