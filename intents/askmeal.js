module.exports = {

    cardFun() {

        const payload = {
            "fulfillmentMessages": [{
                "payload": {
                    "facebook": {
                        "attachment": {
                            "payload": {
                                "text": "Please choose an option for meal",
                                "buttons": [{
                                        "type": 'postback',
                                        "title": 'Breakfast',
                                        "payload": 'breakfast'
                                    },
                                    {
                                        "type": 'postback',
                                        "title": 'Dinner',
                                        "payload": 'dinner'
                                    },
                                ],
                                "template_type": "button"
                            },
                            "type": "template"
                        }
                    }
                },
                "platform": "FACEBOOK"
            }, ]
        }

        return payload;
    }
}