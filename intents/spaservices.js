module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            "We provide Jacuzzi, Sauna and Massage Services as well"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "text": {
                        "text": [
                            "Would you like to try any of them?"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "text": {
                        "text": [
                            "If Yes? Then Please Choose an Option Below"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "payload": {
                        "facebook": {
                            "attachment": {
                                "payload": {
                                    "template_type": "generic",
                                    "elements": [{
                                            "image_url": "https://eurotrend.co.za/wp-content/uploads/2017/05/3103-AquaVue-Corner-1-600x600.jpg",
                                            "title": "Jacuzzi",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Select",
                                                    "payload": "jacuzzi"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "No Need",
                                                    "payload": "show me extras"
                                                },
                                            ],
                                            "subtitle": "Price: $70"
                                        },
                                        {
                                            "image_url": "https://i2.wp.com/ayurmantra.com/wp-content/uploads/2012/07/sauna-bath.jpg?fit=425%2C282&ssl=1",
                                            "title": "Sauna bath",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Select",
                                                    "payload": "sauna bath"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "No Need",
                                                    "payload": "show me extras"
                                                },
                                            ],
                                            "subtitle": "Price: $50"
                                        },
                                        {
                                            "image_url": "https://fonolive.com/services_au/3118/426%20Surry%20Hills%20Massage.jpg",
                                            "title": "Massage",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Select",
                                                    "payload": "massage"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "No Need",
                                                    "payload": "show me extras"
                                                },
                                            ],
                                            "subtitle": "Price: $30"
                                        },
                                    ],
                                    "image_aspect_ratio": "horizontal"
                                },
                                "type": "template"
                            }
                        }
                    },
                    "platform": "FACEBOOK"
                },
            ]
        }

        return payload;
    }
}