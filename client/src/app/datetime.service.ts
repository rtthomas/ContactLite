import { Injectable } from '@angular/core';

@Injectable()
/** Provides utility methods for date and time formatting */
export class DateTimeService {

  constructor() { }

  /**
   * Formats a date for display in an entity list in the form "MMM dd, yyyy"
   * @param s date string in format "yyyy-mm-dd" or MMM yy, yyyy hh:mm:ss aa 
   */
  public formatListDate(s: string) {
    if (s) {
      let d: Date;
      if (s.indexOf('-') > 0) {
        const p = s.split('-');
        d = new Date();
        d.setFullYear(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
      }
      else {
        d = new Date(s);
      }
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const f = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
      return f;
    }
    else {
      return '';
    }
  }


  /** Formats a date for use in an HTML date input element 
   * @param s date string in the form "yyyy-mm-dd" or MMM dd, yyyy hh:mm:ss aa
   * @return date string in form yyyy-mm-dd
  */
  formatDateForInput(s: string) {
    let date: Date;
    if (s.indexOf('-') > 0) {
      const p = s.split('-');
      date = new Date();
      date.setFullYear(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    }
    else {
      date = new Date(s);
    }

    let f = String(date.getFullYear()).concat('-');
    const m = date.getMonth() + 1;
    if (m < 10) {
      f = f.concat('0');
    }
    f = f.concat(String(m)).concat('-');
    const d = date.getDate();
    if (d < 10) {
      f = f.concat('0');
    }
    f = f.concat(String(d));
    return f;
  }

  /**
  * Formats a date for display in an entity list in the form "hh:mm aa"
  * @parsm s a time string in the form string "hh:mm" 
  */
  public formatListTime(s: string) {
    if (!s) {
      return '';
    }
    const hm = s.split(':');
    let h: number = Number(hm[0]);
    let m: string = hm[1];
    let ampm: string;

    if (h == 12) {
      ampm = 'PM';
    }
    else if (h > 12) {
      ampm = 'PM';
      h -= 12;
    }
    else {
      ampm = 'AM';
      if (h == 0) {
        h = 12;
      }
    }

    if (m.length == 1) {
      m = '0' + m;
    }
    s = String(h) + ':' + m + ' ' + ampm;
    return s;
  }
}
