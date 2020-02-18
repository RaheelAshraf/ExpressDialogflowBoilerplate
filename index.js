const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient, Suggestion } = require('dialogflow-fulfillment');
const app = express().use(bodyParser.json());
const port = process.env.PORT || 8080;


app.post('/fulfillment', (request, response) => {
    const _agent = new WebhookClient({ request: request, response: response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));


    function welcome(agent) {
        agent.add(`Welcome to my agent!`);
    }

    function fallback(agent) {
        agent.add(`I didn't understand`);
        agent.add(`I'm sorry, can you try again?`);
    }


    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    // intentMap.set('<INTENT_NAME_HERE>', yourFunctionHandler);
    // intentMap.set('<INTENT_NAME_HERE>', googleAssistantHandler);
    _agent.handleRequest(intentMap);

});

app.listen(port, (req, res) => {
    console.log(`app started on port: ${port}`)
})