# HCC-2016-TSSE
This is the GitHub repository for the CSCE-655: Human-Centered Computing graduate course project

Our aim was to build a Technology Shopping Support Environment. As per the course website:
"By a Technology Shopping Support Environment (TSSE), we mean an interactive environment that helps people engage in comparative shopping, in which they make decisions about what specific product to buy, given a particular device category and associated needs. A shopper chooses the final product by comparing multiple candidate products. You can make your TSSE as general or specific as you like. Examples of device categories include mobile phone, personal computer, graphics card, game console, food processor...
We are specifically defining the comparative shopping scope  as involving integrating information from multiple web sites."

I chose mobile phones as the technology product and collected data for products from the following 3 webistes: Amazon, BestBuy, and eBay.

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

