module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            "Here are all the hotel room available for booking"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "text": {
                        "text": [
                            "Please select the one below you would like to book"
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
                                            "image_url": "https://texasstation.sclv.com/~/media/Images/Page-Background-Images/Texas/TS_Hotel_King_lowrez.jpg?h=630&la=en&w=1080",
                                            "title": "Hotel California",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Book Now 🎫",
                                                    "payload": "book now 01"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Show Details",
                                                    "payload": "show hotel one details"
                                                },

                                            ],
                                            "subtitle": "5 Star \nPrice: $100 Per Day"
                                        },
                                        {
                                            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxWAipET12AtXfzCH4tkpiawneQ201ySPYkEPQZkMxpt6ebp5_Q",
                                            "title": "Hotel Castleway",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Book Now 🎫",
                                                    "payload": "book now 02"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Show Details",
                                                    "payload": "show hotel two details"
                                                },
                                            ],
                                            "subtitle": "4 Star \nPrice: $60 Per Day"
                                        },
                                        {
                                            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2p33NIGvulmlbJu9mEGU_PUoOJqqs_MYcQ1YhkIZqcDaBl2Z",
                                            "title": "Pearl Continental",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Book Now 🎫",
                                                    "payload": "book now 03"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Show Details",
                                                    "payload": "show hotel three details"
                                                },

                                            ],
                                            "subtitle": "7 Star \nPrice: 250$ Per Day"
                                        },
                                        {
                                            "image_url": "https://media.nomadicmatt.com/hotelreview1a.jpg",
                                            "title": "savour",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Book Now 🎫",
                                                    "payload": "book now 04"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Show Details",
                                                    "payload": "show hotel four details"
                                                },

                                            ],
                                            "subtitle": "5 Star \nPrice: 100$ Per Day"
                                        },
                                        {
                                            "image_url": "https://thenypost.files.wordpress.com/2019/03/empathy-suite-damien-hirst-057.jpg?quality=80&strip=all&w=1024",
                                            "title": "Palm Casino Resort",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Book Now 🎫",
                                                    "payload": "book now 05"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Show Details",
                                                    "payload": "show hotel five details"
                                                },
                                            ],
                                            "subtitle": "5 Star \nPrice: 150$ Per Day"
                                        },
                                        {
                                            "image_url": "https://pix10.agoda.net/hotelImages/276234/-1/13d75164caaf0f692321d155994ff9e6.jpg?s=1024x768",
                                            "title": "River Casino Hotel",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Book Now 🎫",
                                                    "payload": "book now 06"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Show Details",
                                                    "payload": "show hotel six details"
                                                },
                                            ],
                                            "subtitle": "7 Star \nPrice: 300$ Per Day"
                                        },
                                        {
                                            "image_url": "https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-deluxeking.jpg",
                                            "title": "Resort World Sentosa",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Book Now 🎫",
                                                    "payload": "book now 07"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Show Details",
                                                    "payload": "show hotel seven details"
                                                },
                                            ],
                                            "subtitle": "7 Star \nPrice: 270$ Per Day"
                                        },
                                        {
                                            "image_url": "https://www.angadartshotel.com/assets/images/home/Room-GREEN.jpg",
                                            "title": "Angad Arts Hotel",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Book Now 🎫",
                                                    "payload": "book now 08"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Show Details",
                                                    "payload": "show hotel eight details"
                                                },
                                            ],
                                            "subtitle": "5 Star \nPrice: 200$ Per Day"
                                        },
                                        {
                                            "image_url": "https://www.signatureliving.co.uk/wp-content/uploads/2017/06/Nature.jpg",
                                            "title": "Signature Living Hotel Liverpool",
                                            "buttons": [{
                                                    "type": "postback",
                                                    "title": "Book Now 🎫",
                                                    "payload": "book now 09"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Show Details",
                                                    "payload": "show hotel nine details"
                                                },
                                            ],
                                            "subtitle": "7 Star \nPrice: 300$ Per Day"
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