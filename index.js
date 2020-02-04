const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient, Suggestion } = require('dialogflow-fulfillment');
const app = express().use(bodyParser.json());
const port = process.env.PORT || 8080;
let noOfPerson;
const WelcomeMessage = require('./intents/welcomeMessage');
const showRoom = require('./intents/showHotels');
const askformeal = require('./intents/askmeal');
const breakfastMenu = require('./intents/breakfast');
const dinnerMenu = require('./intents/dinner');
const SpaServicesAvailable = require('./intents/spaservices');
const extraInRoom = require('./intents/extras');
let daysCost;
let bedtypeCost;
let smokingroomCost;
let parkingCost;
let wakeupCost;
let massageCost;
let jacuzziCost;
let saunaCost;
let roseCosr;
let wineCost;
let champagneCost;
let hotelRoomCost;
let costOfBreakfast
let costOfDinner;
let state = false;

app.post('/webhook', (request, response) => {

    const _agent = new WebhookClient({ request: request, response: response });

    function welcome() {
        state = true;
        const Response = WelcomeMessage.cardFun();
        return response.json(Response);
    }

    function bookRoom(agent) {
        console.log(`The current state is ${state}`);
        const params = agent.parameters;
        if (!params.days) {
            agent.add(`You need Room for how many days?`);
            agent.add(new Suggestion(`1 day`));
            agent.add(new Suggestion(`2 days`));
            return agent.add(new Suggestion(`3 days`));
        }
        agent.add(`You need room for how many person`);
        return daysCost = params.days.amount;
    }


    function Person(agent) {
        const params = agent.parameters;
        noOfPerson = params.person;
        if (params.bedtype === 'single') {
            bedtypeCost = 10
        }

        if (params.bedtype === 'double') {
            bedtypeCost = 20;
        }
        if (noOfPerson === 2) {
            agent.add(`You need a single bed or double bed`);
            agent.add(new Suggestion(`Single Bed`));
            return agent.add(new Suggestion(`Double Bed`));

        }
        if (!noOfPerson) {
            noOfPerson = 2;
        }
        return ShowRooms();
    }

    function ShowRooms() {
        const Response = showRoom.cardFun();
        return response.json(Response);
    }

    function smokingroom(agent) {
        console.log(`Here is the cost of bedtype: ${bedtypeCost}`);
        agent.add(`Do you want smoking room?
It will cost you extra $10`);
        agent.add(new Suggestion(`Yes`));
        agent.add(new Suggestion(`No`));
    }

    function NoSmoking(agent) {
        agent.add(`Thank you for you response`)
        agent.setFollowupEvent({ "name": "CUSTOMER_NAME_REQUESTED", "parameters": { "received": "false" } });
    }

    function parkingLot(agent) {
        agent.add(`Do you need a parking as well
The cost would be $10 per day?`)
        agent.add(new Suggestion(`Yes`));
        agent.add(new Suggestion(`No`));
        return smokingroomCost = 10;
    }

    function NoParking(agent) {
        agent.add(`Hello world`)
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }


    function bookHotelOne(agent) {
        hotelRoomCost = 100;
        agent.add(`Hotel 1 has been booked`);
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }

    function bookHotelTwo(agent) {
        hotelRoomCost = 60;
        agent.add(`Hotel 2 has been booked`);
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }

    function bookHotelThree(agent) {
        hotelRoomCost = 250;
        agent.add(`Hotel 3 has been booked`);
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }

    function bookHotelFour(agent) {
        hotelRoomCost = 100;
        agent.add(`Hotel 4 has been booked`);
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }

    function bookHotelFive(agent) {
        hotelRoomCost = 150;
        agent.add(`Hotel 5 has been booked`);
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }

    function bookHotelSix(agent) {
        hotelRoomCost = 300;
        agent.add(`Hotel 6 has been booked`);
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }

    function bookHotelSeven(agent) {
        hotelRoomCost = 270;
        agent.add(`Hotel 7 has been booked`);
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }

    function bookHotelEight(agent) {
        hotelRoomCost = 200;
        agent.add(`Hotel 8 has been booked`);
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }

    function bookHotelNine(agent) {
        hotelRoomCost = 300;
        agent.add(`Hotel 9 has been booked`);
        return agent.setFollowupEvent({ "name": "bookedroom", "parameters": { "received": "false" } });
    }

    function hotelOneDetails(agent) {
        agent.add(`Here are the additional details
Space : 20m Sq
Washroom : Attached
Wifi : Available
Kettle : Not Available`);
        return agent.add(new Suggestion(`back to hotel rooms`))
    }

    function hotelTwoDetails(agent) {
        agent.add(`Here are the additional details
Space : 25m Sq
Washroom : Attached
Wifi : Available
Kettle : Available`);
        return agent.add(new Suggestion(`back to hotel rooms`))
    }

    function hotelThreeDetails(agent) {
        agent.add(`Here are the additional details
Space : 20m Sq
Washroom : Attached
Wifi : Available
Kettle : Not Available`);
        return agent.add(new Suggestion(`back to hotel rooms`))
    }

    function hotelFourDetails(agent) {
        agent.add(`Here are the additional details
Space : 18m Sq
Washroom : Attached
Wifi : Available
Kettle : Not Available`);
        return agent.add(new Suggestion(`back to hotel rooms`))
    }

    function hotelFiveDetails(agent) {
        agent.add(`Here are the additional details
Space : 20m Sq
Washroom : Attached
Wifi : Available
Kettle : Available`);
        return agent.add(new Suggestion(`back to hotel rooms`))
    }

    function hotelSixDetails(agent) {
        agent.add(`Here are the additional details
Space : 30m Sq
Washroom : 2 x Attached 
Wifi : Available
Kettle : Available`);
        return agent.add(new Suggestion(`back to hotel rooms`))
    }

    function hotelSevenDetails(agent) {
        agent.add(`Here are the additional details
Space : 25m Sq
Washroom : 2 x Attached
Wifi : Available
Kettle : Available`);
        return agent.add(new Suggestion(`back to hotel rooms`))
    }

    function hotelEightDetails(agent) {
        agent.add(`Here are the additional details
Space : 20m Sq
Washroom : Attached
Wifi : Not Available
Kettle : Not Available`);
        return agent.add(new Suggestion(`back to hotel rooms`))
    }

    function hotelNineDetails(agent) {
        agent.add(`Here are the additional details
Space : 30m Sq
Washroom : 3 x Attached
Wifi : Available
Kettle : Available`);
        return agent.add(new Suggestion(`back to hotel rooms`))
    }

    function askForMeal() {
        parkingCost = 10;
        console.log(`Cost of parking is ${parkingCost}`)
        const Response = askformeal.cardFun();
        return response.json(Response);
    }

    function breakfastFun() {
        const Response = breakfastMenu.cardFun();
        return response.json(Response);
    }

    function dinnerFun() {
        const Response = dinnerMenu.cardFun();
        return response.json(Response)
    }

    function fallback(agent) {
        agent.add(`I didn't understand.`);
    }

    function Paleo(agent) {
        costOfBreakfast = 3;
        agent.add(`Thank you for you response`)
        agent.setFollowupEvent({ "name": "wakeup", "parameters": { "received": "false" } });
    }

    function Continental(agent) {
        costOfBreakfast = 25;
        agent.add(`Thank you for you response`)
        agent.setFollowupEvent({ "name": "wakeup", "parameters": { "received": "false" } });
    }

    function canadianSandwich(agent) {
        costOfBreakfast = 4;
        agent.add(`Thank you for you response`)
        agent.setFollowupEvent({ "name": "wakeup", "parameters": { "received": "false" } });
    }

    function fireCrackerChicken(agent) {
        costOfDinner = 2;
        agent.add(`Thank you for you response`)
        agent.setFollowupEvent({ "name": "wakeup", "parameters": { "received": "false" } });
    }

    function chineseLemon(agent) {
        costOfDinner = 2.5;
        agent.add(`Thank you for you response`)
        agent.setFollowupEvent({ "name": "wakeup", "parameters": { "received": "false" } });
    }

    function peprikaPasta(agent) {
        costOfDinner = 3;
        agent.add(`Thank you for you response`)
        agent.setFollowupEvent({ "name": "wakeup", "parameters": { "received": "false" } });
    }

    function wakeUpService(agent) {
        agent.add(`Do you need a wake up service? The cost is $2 per day`);
        agent.add(new Suggestion(`Yes`));
        agent.add(new Suggestion(`No`));
    }

    function wakeupfix(agent) {
        agent.add(`When do you want to wake up?`)
        agent.add(new Suggestion(`6 AM`));
        agent.add(new Suggestion(`7 AM`));
        agent.add(new Suggestion(`8 AM`));
        agent.add(new Suggestion(`9 AM`));
    }

    function Timings(agent) {
        agent.add('hello world');
        return agent.setFollowupEvent({ "name": "spa", "parameters": { "received": "false" } });
    }

    function dontWakeup(agent) {
        agent.add('hello world');
        return agent.setFollowupEvent({ "name": "spa", "parameters": { "received": "false" } });
    }

    function SpaService() {
        wakeupCost = 2;
        console.log(`Cost of wake is: ${wakeupCost}`);
        const Response = SpaServicesAvailable.cardFun();
        return response.json(Response);
    }

    function Massage(agent) {

        agent.add(`You selected Massage.  You need something else`);
        agent.add(new Suggestion(`Yes`));
        agent.add(new Suggestion(`No`));
        return massageCost = 30;
    }

    function MassageandMore(agent) {
        agent.add('Hello world')
        return agent.setFollowupEvent({ "name": "spa", "parameters": { "received": "false" } });
    }

    function MassageOnly(agent) {
        agent.add('Hello world')
        return agent.setFollowupEvent({ "name": "extevent", "parameters": { "received": "false" } });
    }

    function Jacuzzi(agent) {
        agent.add(`You selected Jacuzzi. You need something else`);
        agent.add(new Suggestion(`Yes`));
        agent.add(new Suggestion(`No`));
        return jacuzziCost = 70;
    }

    function JacuzziandMore(agent) {
        agent.add('Hello world')
        return agent.setFollowupEvent({ "name": "spa", "parameters": { "received": "false" } });
    }

    function JacuzziOnly(agent) {
        agent.add('Hello world')
        return agent.setFollowupEvent({ "name": "extevent", "parameters": { "received": "false" } });
    }

    function Sauna(agent) {
        agent.add(`You selected Sauna.  You need something else`);
        agent.add(new Suggestion(`Yes`));
        agent.add(new Suggestion(`No`));
        return saunaCost = 50;
    }

    function SaunaandMore(agent) {
        agent.add('Hello world')
        agent.setFollowupEvent({ "name": "spa", "parameters": { "received": "false" } });
    }

    function SaunaOnly(agent) {
        agent.add('Hello world')
        agent.setFollowupEvent({ "name": "extevent", "parameters": { "received": "false" } });
    }

    function NeedExtras() {
        const Response = extraInRoom.cardFun();
        return response.json(Response);
    }

    function rosebouquet(agent) {
        roseCosr = 10;
        agent.add(`hello world`)
        agent.setFollowupEvent({ "name": "detail", "parameters": { "received": "false" } });
    }

    function bottleOfWine(agent) {
        wineCost = 15;
        agent.add(`hello world`)
        agent.setFollowupEvent({ "name": "detail", "parameters": { "received": "false" } });
    }

    function Champagne(agent) {
        champagneCost = 30;
        agent.add(`hello world`)
        agent.setFollowupEvent({ "name": "detail", "parameters": { "received": "false" } });
    }


    function userDetails(agent) {
        agent.add(`Please provide your payment method`);
        agent.add(new Suggestion(`Visa Card`));
        agent.add(new Suggestion(`Cash on Arrival`));
    }

    function VisaCard(agent) {
        const orderprice = {
            noofdays: `${daysCost}`,
            smokingroom: `${smokingroomCost}`,
            parking: `${parkingCost}`,
            bedTypecost: `${bedtypeCost}`,
            wakeup: `${wakeupCost}`,
            massage: `${massageCost}`,
            Jacuzzi: `${jacuzziCost}`,
            Sauna: `${saunaCost}`,
            rose: `${roseCosr}`,
            wine: `${wineCost}`,
            champagne: `${champagneCost}`,
            breakfast: `${costOfBreakfast}`,
            dinner: `${costOfDinner}`
        };
        console.log(orderprice);
        agent.add(`Thank you for ordering`)
        agent.add(new Suggestion(`Yes Place this Order`));
        agent.add(new Suggestion(`Cancel this Order`));

    }

    function CashOnArrival(agent) {

        if (costOfBreakfast === undefined) {
            costOfBreakfast = 0;
        }

        if (smokingroomCost === undefined) {
            smokingroomCost = 0;
        }


        if (parkingCost === undefined) {
            parkingCost = 0;
        }


        if (wakeupCost === undefined) {
            wakeupCost = 0;
        }


        if (massageCost === undefined) {
            massageCost = 0;
        }


        if (jacuzziCost === undefined) {
            jacuzziCost = 0;
        }


        if (saunaCost === undefined) {
            saunaCost = 0;
        }


        if (roseCosr === undefined) {
            roseCosr = 0;
        }


        if (wineCost === undefined) {
            wineCost = 0;
        }


        if (champagneCost === undefined) {
            champagneCost = 0;
        }

        if (costOfDinner === undefined) {
            costOfDinner = 0;
        }

        if (hotelRoomCost === undefined) {
            hotelRoomCost = 0;
        }

        if (daysCost === undefined) {
            daysCost = 0;
        }

        const total = daysCost * hotelRoomCost + costOfBreakfast + smokingroomCost + parkingCost + wakeupCost + massageCost + jacuzziCost + roseCosr + wineCost + champagneCost + costOfDinner;

        agent.add(`Thank you for Ordering 
Here is your order details
No of Days: ${daysCost}
cost of Room: ${hotelRoomCost} * ${daysCost}
cost of bed: ${costOfBreakfast}
cost of smoking room: ${smokingroomCost}
cost of parking: ${parkingCost}
cost of wakeup service: ${wakeupCost}
cost of massage: ${massageCost}
cost of breakfast: ${costOfBreakfast}
cost of dinner: ${costOfDinner}
cost of Jacuzzi: ${jacuzziCost}
cost of Sauna Bath: ${saunaCost}
cost of Bouquet of Roses: ${roseCosr}
cost of Bottle of Wine: ${wineCost}
cost of Bottle of Champagne: ${champagneCost}`);
        agent.add('Total Cost:' + $total);
        agent.add(new Suggestion(`Yes Place this Order`));
        agent.add(new Suggestion(`Cancel this Order`));

    }

    const intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('book room', bookRoom);
    intentMap.set('persons', Person);
    intentMap.set('show rooms', ShowRooms);
    intentMap.set('hotelone', bookHotelOne);
    intentMap.set('hoteltwo', bookHotelTwo);
    intentMap.set('hotelthree', bookHotelThree);
    intentMap.set('hotelfour', bookHotelFour);
    intentMap.set('hotelfive', bookHotelFive);
    intentMap.set('hotelsix', bookHotelSix);
    intentMap.set('hotelseven', bookHotelSeven);
    intentMap.set('hoteleight', bookHotelEight);
    intentMap.set('hotelnine', bookHotelNine);
    intentMap.set('hotelonedetails', hotelOneDetails);
    intentMap.set('hoteltwodetails', hotelTwoDetails);
    intentMap.set('hotelthreedetails', hotelThreeDetails);
    intentMap.set('hotelfourdetails', hotelFourDetails);
    intentMap.set('hotelfivedetails', hotelFiveDetails);
    intentMap.set('hotelsixdetails', hotelSixDetails);
    intentMap.set('hotelsevendetails', hotelSevenDetails);
    intentMap.set('hoteleightdetails', hotelEightDetails);
    intentMap.set('hotelninedetails', hotelNineDetails);
    intentMap.set('smokingRoom', smokingroom);
    intentMap.set('parking', parkingLot);
    intentMap.set('parking - no', NoParking);
    intentMap.set('smokingRoom - no', NoSmoking);
    intentMap.set('meal', askForMeal);
    intentMap.set('breakfast', breakfastFun);
    intentMap.set('dinner', dinnerFun);
    intentMap.set('paleo', Paleo);
    intentMap.set('continental', Continental);
    intentMap.set('canadian sandwich', canadianSandwich);
    intentMap.set('chinese lemon', chineseLemon);
    intentMap.set('firecrackerchicken', fireCrackerChicken);
    intentMap.set('peprika pasta', peprikaPasta);
    intentMap.set('wakeupservice', wakeUpService);
    intentMap.set('wakeupserviceyes', wakeupfix);
    intentMap.set('wakeupservice - no', dontWakeup);
    intentMap.set('timing', Timings);
    intentMap.set('spa services', SpaService);
    intentMap.set('massage', Massage);
    intentMap.set('massage - yes', MassageandMore);
    intentMap.set('massage - no', MassageOnly);
    intentMap.set('jacuzzi', Jacuzzi);
    intentMap.set('jacuzzi - yes', JacuzziandMore);
    intentMap.set('jacuzzi - no', JacuzziOnly);
    intentMap.set('sauna', Sauna);
    intentMap.set('sauna - yes', SaunaandMore);
    intentMap.set('sauna - no', SaunaOnly);
    intentMap.set('extras', NeedExtras);
    intentMap.set('champagne', NeedExtras);
    intentMap.set('rose', rosebouquet);
    intentMap.set('champagne', Champagne);
    intentMap.set('wine', bottleOfWine);
    intentMap.set('userDetail', userDetails);
    intentMap.set('visa card', VisaCard);
    intentMap.set('cashonarrival', CashOnArrival);
    _agent.handleRequest(intentMap);

})


app.listen(port, (req, res) => {

    console.log(`app started on port: ${port}`)
})