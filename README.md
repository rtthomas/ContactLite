# ContactLite
## Overview
ContactLite is an application based on Angular and Google App Engine. It's a simple "contact management" system I use to track my job searches.
It is based on a data model representing the following entities:
* Company: an organization advertising directly for developers, or an employment agency or consulting firm 
* Person: a contact at a Company
* Position: postings by a Company for a job 
* Contact: A phone conversation or email with a Person concerning a Position
* Appointment: a time and date for meeting a Person from a Company

If a Contact is an email message, it is registered with the application by either cc'ing or forwarding an email to the application (see below)

Once the date and time of an appointment has passed, it can be converted into a Contact
## User Interface
The application presents the user with a menu corresponding to the entities described above. The UI imnplements a responsive design based on the Bootstrap CSS library. The images below are those which will be rendered on displays with greater than 768 pixel width 
