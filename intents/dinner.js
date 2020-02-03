module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            "Please Choose your dinner from the options below"
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
                                            "image_url": "https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg",
                                            "title": "firecracker chicken",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Choose for Dinner",
                                                    "payload": "firecracker chicken"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Don't Need",
                                                    "payload": "dont need dinner"
                                                },
                                            ],
                                            "subtitle": "Price: $2"
                                        },
                                        {
                                            "image_url": "https://cafedelites.com/wp-content/uploads/2019/01/Chinese-Lemon-Chicken-IMAGE-34.jpg",
                                            "title": "Chinese Lemon Chicken",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Choose for Dinner",
                                                    "payload": "chinese lemon chicken"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Don't Need",
                                                    "payload": "dont need dinner"
                                                },
                                            ],
                                            "subtitle": "Price: $2.5"
                                        },
                                        {
                                            "image_url": "https://pinchofyum.com/wp-content/uploads/Paprika-Chicken-Pasta-Square.jpg",
                                            "title": "Peprika Chicken Pasta",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Choose for Dinner",
                                                    "payload": "peprika chicken pasta"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Don't Need",
                                                    "payload": "dont need dinner"
                                                },
                                            ],
                                            "subtitle": "Price: $3"
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