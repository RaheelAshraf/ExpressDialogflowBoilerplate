module.exports = {

    cardFun() {

        const payload = {
            "fulfillmentMessages": [{
                "payload": {
                    "facebook": {
                        "attachment": {
                            "payload": {
                                "text": "Please select wake up time",
                                "buttons": [{
                                        "type": 'postback',
                                        "title": '6 AM',
                                        "payload": 'wake me up at 6 AM'
                                    },
                                    {
                                        "type": 'postback',
                                        "title": '7 AM',
                                        "payload": 'wake me up at 7 AM'
                                    },
                                    {
                                        "type": 'postback',
                                        "title": '8 AM',
                                        "payload": 'wake me up at 8 AM'
                                    },
                                    {
                                        "type": 'postback',
                                        "title": '9 AM',
                                        "payload": 'wake me up at 9 AM'
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