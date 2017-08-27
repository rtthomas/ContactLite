/**
 * Base class for entity module classes provides common utility functions
 */
export class Entity {

    /** Extracts the time from a JSON date string as "hh:mm" */
    static timeFromJSONDate(s: string) {
        if (s) {
            const d = new Date(s);
            const h: string = String(d.getHours());
            const m: string = d.getMinutes() < 10 ? '0'.concat(String(d.getMinutes())) : String(d.getMinutes());
            return h.concat(':').concat(m);
        }
        else {
            return null;
        }
    }
    constructor() { }
}

