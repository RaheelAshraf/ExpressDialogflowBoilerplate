module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            "Please Choose your breakfast from the options below"
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
                                            "image_url": "https://media1.popsugar-assets.com/files/thumbor/xhwRJCRKQMcdn_ydpzBn1qPpZMo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/07/16/939/n/1922729/fbeb92b7a978cd3a_paleo-bowl-main.jpg",
                                            "title": "Paleo Breafast",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Choose for Breakfast",
                                                    "payload": "paleo breakfast"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Don't Need",
                                                    "payload": "dont need breakfast"
                                                },
                                            ],
                                            "subtitle": "Price: $3"
                                        },
                                        {
                                            "image_url": "https://img-global.cpcdn.com/recipes/c5fc07a2fc2d25eb/751x532cq70/continental-breakfast-recipe-main-photo.jpg",
                                            "title": "Continental Breakfast",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Choose for Breakfast",
                                                    "payload": "continental breakfast"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Don't Need",
                                                    "payload": "dont need breakfast"
                                                },
                                            ],
                                            "subtitle": "Price: $25"
                                        },
                                        {
                                            "image_url": "https://i.cbc.ca/1.5192919.1561664247!/fileImage/httpImage/great-canadian-breakfast-sandwich.jpg",
                                            "title": "Canadian Sandwich",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Choose for Breakfast",
                                                    "payload": "canadian sandwich"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Don't Need",
                                                    "payload": "dont need breakfast"
                                                },
                                            ],
                                            "subtitle": "Price: $4"
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