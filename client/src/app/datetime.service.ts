import { Injectable } from '@angular/core';

@Injectable()
/** Provides utility methods for date and time formatting */
export class DateTimeService {

  constructor() { }

  /**
   * Formats a date for display in an entity list in the form "MMM dd, yyyy"
   * @param d a date millisecond value
   */
  public formatListDate(d: number) {
    if (d) {
      const date: Date = new Date(d);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const f = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
      return f;
    }
    else {
      return '';
    }
  }

  /** Formats a date for use in an HTML date input element 
   * @param d millisecond date value
   * @return date string in form yyyy-mm-dd
  */
  formatDateForInput(d: number) {
    const date: Date = new Date(d);
    const year: string = Number(date.getFullYear()).toString();
    let month: string = Number(date.getMonth() + 1).toString();
    if (month.length === 1){
      month = '0' + month;
    }
    let day: string = Number(date.getDate()).toString();
    if (day.length === 1){
      day = '0' + day;
    }
    const f = year.concat('-').concat(month).concat('-').concat(day);
    return f;
  }

  /**
  * Formats a date for display in an entity list in the form "hh:mm aa"
  * @param t a date millisecond value  
  */
  public formatListTime(t: number) {
    if (!t) {
      return '';
    }
    const date: Date = new Date(t);
    let h: number = date.getHours();
    let m: string = new Number(date.getMinutes()).toString();
    let ampm: string;

    if (h === 12) {
      ampm = 'PM';
    }
    else if (h > 12) {
      ampm = 'PM';
      h -= 12;
    }
    else {
      ampm = 'AM';
      if (h === 0) {
        h = 12;
      }
    }

    if (m.length === 1) {
      m = '0' + m;
    }
    return String(h) + ':' + m + ' ' + ampm;
  }
}
