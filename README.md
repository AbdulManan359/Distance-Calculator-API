# Distance Calculator API

## This API calculates the distance between 2 geographical coordinates.

### Introduction
Distance Calculator API calculates the distance between 2 Coordinates and returns a JSON containing the distance in meters(**m**), kilometers(**km**), & miles(**mi**).  
For example, if you want to find the distance between two locations A and then this API needs four inputs:
- startLatitude = Latitude of Location A
- startLongitude = Longitude of Location A
- endLatitude = Latitude of Location B
- endLongitude = Longitude of Location B
Add these values as a query Parameters with the endpoint "/getdistance". And thus, you will get the result.

### Tools & Technologies Used
- NodeJS
- Javascript
- ExpressJS

### NPM Dependencies
- Express version 5.2.1

### How to use it?
- After getting the project files, open the CLI and change your current directory to the project files. Like this: <br>
                    cd Path_to_Project_Folder
- After that run following command <br>
                    node index.js
  (Make sure NodeJS is installed already)
- You will get the following message: <br>
                "Listening on Port: 3000"
- Now make a **GET** request on the following link:<br>
            "http://localhost:3000/getdistance?startLatitude=[v1]&startLongitude=[v2]&endLatitude=[v3]&endLongitude=[v4]" <br>
  Put the values of each latitudes and longitude of starting and ending points in geographical coordinates. ==Note== The coordinates should be in degrees.
- And after the request, you will get the calculated distance as a result.
  
