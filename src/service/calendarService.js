import axiosClient from "./axiosClient";

class CalendarService{
    getCalendarAll(){
       
        return axiosClient.get("calendar")
    }
}

export default new CalendarService()