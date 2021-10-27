

let HOSTNAME = window.location.origin;

let API_HOST = "https://data.cityofnewyork.us/"

const GLOBELCONSTANT = {
    CARS:{
        GET_CAR_CRASHED: API_HOST + "resource/h9gi-nx95.json",
        CAR_DETAILS :  API_HOST + "resource/h9gi-nx95.json",
        GET_BY_DATE: API_HOST + "resource/h9gi-nx95.json?crash_date=",
        FILTER_VALUE: API_HOST + "resource/h9gi-nx95.json?crash_date=2014-01-21T00:00:00.000&vehicle_type_code2=PASSENGER%20VEHICLE",
        CAR_PAGINATION: API_HOST + `resource/h9gi-nx95.json?crash_date={date}&$offset={offset}&$limit={limit}`
    }

}

export default GLOBELCONSTANT;