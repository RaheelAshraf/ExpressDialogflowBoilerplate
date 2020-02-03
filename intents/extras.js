module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            "Here are some more additional services"
                        ]
                    },
                    "platform": "FACEBOOK"
                },

                {
                    "text": {
                        "text": [
                            "Would you like to have any of them in your room?"
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
                                            "image_url": "https://cdn3.flowwow.com/data/flowers/524x524/46/1534503103_87892046.jpg",
                                            "title": "Bouquet of Roses",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Yes",
                                                    "payload": "bouqet of roses"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "no",
                                                    "payload": "I dont need rose"
                                                },
                                            ],
                                            "subtitle": "Price: $10"
                                        },
                                        {
                                            "image_url": "https://www.virginballoonflights.co.uk/wp-content/uploads/2014/07/6-Bottle-Wine-Case-New-645x400.jpg",
                                            "title": "Bottle of Wine",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Yes",
                                                    "payload": "bottle of wine"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "no",
                                                    "payload": "I dont need wine"
                                                },

                                            ],
                                            "subtitle": "Price: $15"
                                        },
                                        {
                                            "image_url": "https://www.tablespoon.com/-/media/Images/Articles/Content/how-to-open-champagne/Champagne_HERO.jpg",
                                            "title": "Bottle of Champagne",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "yes",
                                                    "payload": "champagne"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "no",
                                                    "payload": "I dont need champagne"
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