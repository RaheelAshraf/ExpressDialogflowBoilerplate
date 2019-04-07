const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const app = express().use(bodyParser.json());
const port = process.env.PORT || 8080;

app.post('/webhook', (request , response) => {

    const _agent = new WebhookClient({ request: request, response: response });

    function welcome(agent) {
        agent.add('welcome agent');
    }

    function fallback(agent) {
        agent.add(`I didn't understand.`);
    }

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    _agent.handleRequest(intentMap);
})


app.listen(port, (req, res) => {

    console.log(`app started on port: ${port}`)
})