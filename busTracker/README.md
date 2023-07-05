# **Project Name**:  

Real Time Bus Tracker

# **Description**: 

The Real Time Bus Tracker project uses information from latitude and longitude coordinates and Google Cloud/Google Maps Platform to live track bus movement throughout part of the city.

The Real Time Bus Tracker project is an example of my Javascript, HTML5, and css coding capabilities, and as such, it is one component of my professional portfolio. This project demonstrates that I can use a public API key in order to incorporate live data to track movement (of a bus), as well as use documentation provided by Google to adapt a map. This particular project is based off of a similar activity I worked on in June of 2023 involving a bus tracker from MIT campus to Harvard campus from the MIT xPro via Emeritus bootcamp I was enrolled in called "Professional Certificate in Coding: Full Stack Development with MERN."

I changed the original course task in the following ways:
*Changed the map view to be a hybrid between roadmap and satellite.
*Increased the zoom.
*Decided to use the Google API over MapBox or other options.

# **Installation**: 

To duplicate this project you will need to create a public API key in the form of a URL from a transportation agency. In my project, I used Massachusetts Bay Transportation Authority (MBTA) to track the bus. You will find this within the async function found in the mapAnimation.js file. 

In addition, a private API key is needed from Google Maps Platform or another source like Mapbox. My private API key is hidden to the public, but is found in the <head> of the index.html file. Within the <body> of the index.html file, the variable to hide the private API key can be found. Because I hid my privat API key, the phrase "For Development Purposes Only" is displayed on the website window.

The following files are needed to duplicate this project: index.html, mapAnimation.js, styles.css. To hide a private API key, a file is needed to store the API key and a .gitignore file, which contains the name of the file that holds the API key. Additionally, marker icons to indicate bus location are necessary.

# **How to Run**:

To run my project on your machine, load the website onto a web browser. The bus shows movement every 15 seconds, so wait at intervals of 15 seconds to notice movement.

Internet connection required. Both Chrome and Edge browsers will work.

# **Support**: 

Please contact me via email at krentmeester@uwalumni.com.

# **Roadmap**: 

Future fixes or improvements that would be helpful to a user:

*My API key only allows 15,000 total requests before incurring charges. If I were to actually employ this for the public, I would need to request an increase in the amount of requests allowed and pay a fee.

*Currently the bus route is just one portion of Boston's bus traffic, but it would be much more valuable to track ALL routes and ALL modes of transportation.

*Something to consider for the future would be adding a component to mapAnimation.js to represent when a bus is on a detour. Perhaps using a unique color like orange to show the bus is off of its normal route.

*Another possible addition would be to use the color green to show that the bus is ahead of its schedule or red to show that it is behind its normal scheduled time. 

*Another addition could be to indicate the direction of the bus.

*It might also be nice to show a flashing bus icon if something serious has been reported like violence, prolonged stopping, accident, etc.

# **License**: 

MIT License

Copyright (c) 2023 Kerri Rentmeester

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.