# HCC-2016-TSSE
This is the GitHub repository for the CSCE-655: Human-Centered Computing graduate course project

Our aim was to build a Technology Shopping Support Environment.

## Functionality:
On the home, the top section is where we can enter the Search Preferences. On clicking the 'Search' button, the search results would be shown.
Currently, out of the 6 products for which the BigSemantics data is parsed, only the last one is displayed. After making the selection amon the search results, you can click on the 'Compare Now!' button to go to the Final Comparisons page. Hovering the mouse over or cliking any of the choices reults in changing the background color to give immediate feedback regarding selection. 

You can use the Sticky Notes feature on either of the pages to make and save notes, which you might get on reflect in or on action.

## Issues not yet fixed:
1. Only 1 product showing out of 6 on the first page.

## Features yet to be developed:
1. Showing facted metadata using nested metadata and meta-metadata in the BigSemntics data files.

## Credits
Since this was a simple static website, not using any web-framework like Rails or JSF, Heroku was not displaying it correctly when I first deployed the same. I followed the this post to get deployed application to work correctly on Heroku: https://gist.github.com/wh1tney/2ad13aa5fbdd83f6a489

Sticky Notes feature included by using code from: http://tympanus.net/jstickynote/

