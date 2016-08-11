# DriveUs
Compares ride prices and times across all Uber and Lyft products, finding users the best deal or quickest rides.

##Installation
The app can be accessed at driveus.heroku.com.  To run it locally, you may either download this repo, or fork it and download your fork.

##Usage
From the root of the project directory, run "npm install", followed by "npm start".  The app should now be accessible at localhost:3000.  

You will need to fill in the environment variables in the .env.example file, and rename it to .env:

DB_CONNSTRING: a connection string to a Postgres database

GOOGLE_KEY: a Google Maps API key

LYFT_ID: a Lyft app Client ID

LYFT_SECRET: a Lyft app Client Secret

UBER_TOKEN: an Uber Rides app Server Token

Enter an origin and destination address, then Submit.  You will be shown a list of Uber and Lyft products, along with their prices and estimated times.  Click on your desired ride.  If you are on mobile, the appropriate app will open directly and be pre-populated with the addresses you entered.  If you are on a computer, you will have the option of emailing a link to yourself that will open the app.

##Contributing
1.  Fork this repo
2.  Clone it and check out a feature branch
3.  Make your changes, adhering to the AirBnB style guide, and commit them
4.  Push to your feature branch
5.  Make a pull request to drivus/dev branch!

##Credits
Contributors:

Aaron Heise  -  github.com/AaronHeise

Amol Joshi  -  github.com/Amol023

Elifaz Filho  -  github.com/Elifaz

Ian Mrak  -  github.com/ianmram

John Slape  -  github.com/sljohn
