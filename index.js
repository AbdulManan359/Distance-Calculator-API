import express from "express";

const app = express();
env.config();


// By Haversine Formula

function degreesToRadian(angle) {
    return (angle * (Math.PI) / 180)
}
function haversine(value) {
    const result = (1 - Math.cos(value)) / 2;
    return result;
}

function haversineInverse(value) {
    const result = Math.acos(1 - (2 * value));
    return result;
}

function distanceCalculator(lat1, long1, lat2, long2) {
    lat1 = degreesToRadian(lat1);
    lat2 = degreesToRadian(lat2);
    long1 = degreesToRadian(long1);
    long2 = degreesToRadian(long2);
    const earthRadius = 6371;//in km
    const latitudeDifference = lat2 - lat1;
    const longitudeDifference = long2 - long1;

    const r1 = haversine(latitudeDifference);
    const r2 = haversine(longitudeDifference);
    const r3 = (Math.cos(lat1)) * (Math.cos(lat2)) * r2;
    const haversineTheta = r1 + r3;


    const angle = haversineInverse(haversineTheta);

    const distanceInKm = earthRadius * angle;

    return distanceInKm
}


app.get("/getdistance", (req, res) => {
    const APIkey = process.env.my_API_KEY;
    const headerAPI = req.headers['x-api-key'];

    if (APIkey === headerAPI) {


        try {
            const startLat = Number(req.query.startLatitude);
            const startLong = Number(req.query.startLongitude);
            const endLat = Number(req.query.endLatitude);
            const endLong = Number(req.query.endLongitude);

            const distance = distanceCalculator(startLat, startLong, endLat, endLong);

            const responseJSON = {
                requestStatus: "Completed",
                requestedData: {
                    distance: {
                        meters: distance * 1000,
                        kilometers: distance,
                        miles: distance * 0.621371,
                    }
                }
            }

            res.json(responseJSON);

        } catch (err) {
            console.log(err);
            res.status(500).json({
                requestStatus: "Incomplete",
                reason: "An error occured",
                errorMessage: "Sorry for the inconvenince, there is an error processing your request."
            });
        }


    } else {
        res.sendStatus(401);
    }
})
