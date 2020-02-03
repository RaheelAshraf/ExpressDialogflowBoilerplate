module.exports = {

    cardFun() {

        const payload = {
            "fulfillmentMessages": [{
                "payload": {
                    "facebook": {
                        "attachment": {
                            "payload": {
                                "text": "Welcome to Hotel Booking",
                                "buttons": [{
                                        "type": 'postback',
                                        "title": 'Book Room',
                                        "payload": 'book room'
                                    },
                                    {
                                        "type": 'postback',
                                        "title": 'Exit',
                                        "payload": 'exit'
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