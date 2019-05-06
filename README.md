# Technical Test Using the NASA Api

Documentation URL: </br>
https://api.nasa.gov/index.html </br>
https://api.nasa.gov/api.html

## Setup

**Step 1**: Open a new repository at `https://github.com/Lotus-1`
**Step 2**: Create API key
**Step 3**: Create a `.env` file and place your api key there. This file should not be pushed to your repository.

### Home endpoint (/):

**Background**
- Use the `apod` endpoint (`GET https://api.nasa.gov/planetary/apod`) to fetch the
"picture of the day" and use this picture as background for your app. The background should cover the whole page
and stay fixed when the user is scrolling.

**Title**
- The title should be the name of the image you set as background.
- When the mouse is over the title, a box should appear containing the description provided by the api.

**Input Form**

- The Input form should have 2 fields, `Start date` and `End date` and a `Submit` button.

### Map Asteroids Close To Earth

Endpoint: `GET https://api.nasa.gov/neo/rest/v1/feed` (see documentation for query parameters)

**Specs**

- The user can enter a start date and end date for the asteroids to be displayed.
- If the api returns an error message, an appropriate error should be displayed to the user.
- Each asteroid should be represented on the page with its relevant information
- Each asteroid is represented on the page in it's own box. (see diagram)
- The page should show two asteroids on each row. (see diagram)
- If an asteroid is potentially hazardous to Earth, its background should be blinking red
- For each asteroid, the following information should be displayed:
    * ID number
    * name
    * size (diameter in meters, rounded to full integer)
    * Estimated speed (in km)
- The page should be divided in sections. Each section represents a close approach date (see the data provided by the api). The close approach date should be seen as title to each section (see diagram)
- The asteroids belonging to each section should appear by decreasing order of size (biggest ones first). 

