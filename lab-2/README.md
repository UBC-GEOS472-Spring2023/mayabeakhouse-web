# Commuter Flows between Counties in Oregon #

![](screenshot.png)

<p> Link to map: https://ubc-geos472-spring2023.github.io/mayabeakhouse-web/lab-2/oregoncommuters.html

Collaborations and resources: <br>
I used this tutorial (https://neiugis.github.io/lab6/) to understand how to use the Leaflet Canvas Flowmap plugin. I also looked at the Github repository for the plugin (https://github.com/jwasilgeo/Leaflet.Canvas-Flowmap-Layer). The animation and interaction sections of the README were especially useful.

Reflective analysis: <br>
The purpose of this map is to visualize the largest flows of commuters between counties in Oregon. This visualization could be useful to transportation planners, to predict usage of roads and public transit. I think the map is successful in providing a general idea of which way commuters are travelling, such as which counties have a lot of commuters coming in, and which counties have a lot going out. However, since the data points are located on the center of each county, rather than major population centers, and also because the flows are shown as Bezier curves, rather than following actual roadways or transit routes, it is difficult to understand the actual pathways commuters are taking. As such, I think the map is useful in providing a small-scale overview of inter-county commutes, but it is not very successful at providing an accurate visualization at larger scales. 
  
In designing this map, first I searched for different tools available for creating interactive flow maps. One tool I found was Flowmap.blue, which I think would be very useful, however, it does not involve much coding, so I decided to use another method. I found a tutorial for using the Leaflet Canvas Flowmap plugin. This tutorial used a different dataset, so I had to spend a considerable amount of time converting the data I wanted to use into a format similar to the one used in the tutorial. I downloaded a dataset from the US Census Bureau, containing state and county-level data on residence and workplace in the US, between 2011-2015. I chose to only include the rows for counties of residence in Oregon, but this was still too large of a file, so I then I removed all of the rows with less than 1000 commuters. I chose this number arbitrarily, to eliminate less significant flows of commuters, most of which also had very high margins of error. Then I loaded the csv in QGIS and created  a unique GEOID for each county. I followed the tutorial steps to use QGIS to assign latitude and longitude coordinates to the residence county and workplace county for each flow, and created a geoJSON from this data. I followed the tuotial's code to load the flow map using the plugin and the geoJSON file. I also changed the basemap to be more minimal and aesthetically pleasing. To animate the flows, I adapted some code from the tutorial. 
  
Finally, to add interactivity where the user can hover over a county to see only flows coming from it, I looked at the github repository for the plugin. 
I think that this interactivity adds understanding because it allows users to focus on a specific county, which is useful because the initial view showing all flows when you first load the map looks a bit busy and it is harder to see each individual flow.
As mentioned previously, I think the map could be improved by showing flows along major routes (rather than Bezier curves), and placing the coordinate points for counties at their population center, rather than geographic center. I would also like add pop-ups or labels for each county, and possibly the county boundaries. Another thing which could be useful to incorporate would be to size flows according to the number of commuters, and even have a slider where users can set the minimum number of commuters to display a flow. 
  

</p>
