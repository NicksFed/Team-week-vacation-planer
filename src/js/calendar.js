export class Calendar{
  constructor(){
    this.currentDate = new Date();
  }

  static formatHotelDate(inputDate){
    //returns YYYY-MM-DD
    let year = inputDate.getFullYear();
    let month = inputDate.getMonth() + 1;
    let day = inputDate.getDate();
    let returnMonth;
    let returnDay;
    if(month <= 9){
      returnMonth = "0" + month;
    } else {returnMonth = month;
    }
    if(day <= 9){
      returnDay = "0" + day;
    } else {returnDay = day;
    }
    let returnString = year + "-" + returnMonth + "-" + returnDay;
    console.log(returnString);
    return returnString;
  }
  
  calculateNextFriday(){
    //get today's date.
    //return the next friday 
    let newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + this.getDaysTilFriday());
    return newDate;
  }

  calculateNextSunday(){
    let newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + this.getDaysTilFriday() + 2);
    return newDate;
  }


  getDaysTilFriday(){
    //calculate sat and sun
    if(this.currentDate.getDay() === 6){
      return 12;
    }
    let dayDelta = (5 - this.currentDate.getDay()); 
    return dayDelta;
  }
}