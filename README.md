# Project-Adventure
Our team was given the task of creating a portal for an e-commerce website by Hack Reactor as our Front End Project.
The client was using a legacy API for their product information that we were required to adapt to.
Utilizing modern technologies such as React hooks and Styled components, the team was able to create four unique sections
of the page fitting the clients requirements as well as some optional additions:

# Overview
### **Contributor: Walter Latimer**
<!-- [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elliemhunt/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Elliehunt8) -->

The main description for the product currently being viewed. It shows all the relative information including styles, pricing,
sizing, average customer rating, quantity in stock, and ability to add to cart. While our team was not tasked with the full Cart service we ensured it was connected properly. The main image can be clicked on for a more detailed view, as well as having access to the rest of the pictures
for that specific item, so as to not require exiting the zoom view and selecting another thumbnail. This greatly improved user experience.
<!-- 
![](https://media.giphy.com/media/RYQFYUTsZfr0meAWoD/giphy.gif) -->

# Related Products and Outfit
### **Contributor: Ryan De Leon**
<!-- [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kenneth-bakke-543a39157/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kenneth-bakke) -->

A list of products related to the currently viewed product appear under the overview page in a carousel. Each product card contains a brief item description of each related item. To indicate if there is a sale for the particular item,  the original price will be strike through and the sale price will appear with red text. On the corner of the Related Items card, an open book icon is visible and you are able to compare the features of the currently viewed item and the product clicked. Then a modal window will appear with features of each item. Clicking a related product will rerender the page and the related products will change. You are also able to add different outfit styles to the ‘Your Outfit’ section using the ‘Add to Outfit’ button. It will persist even after you leave and return to the page. You are able to remove the outfit from ‘Your Outfit’ section by pressing the trash icon located at the top right of the outfit card. 

<!-- ![](https://media.giphy.com/media/LharojqjrGGwXIzDEE/giphy-downsized-large.gif) -->

# Questions and Answers
### **Contributor: Alexander Cannon**
<!-- [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yasin-khan-09245ba9/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yasinnkhann) -->

Showing the first four user submitted questions related to the current product, each question shows the top answer on click. If there are more questions, there is a button to show the next two questions. There is also a button inside each question to view more answers if they exist.
The ability to mark specific questions and/or answers as helpful is implemented as well as the ability to report a question or answer.
There is also the option to add a question and answer, both with the functionality of adding images and required data for viewing.

<!-- ![](https://media.giphy.com/media/CMgTuEdytNqcNZrqIE/giphy.gif) -->

# Ratings and Reviews
### **Contributor: Ivy Hu**
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ivyhu630/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ivyhu630)

Every user is able to view all reviews for the current product, an average rating, search for a review and option to submit their own review. Each review displays the reviewer specific rating, the date submitted, and optional pictures. Reviews also have the option to be marked as helpful or to report just as with the question and answer section. The average rating is displayed as a star rating ranging from 1 to 5 stars. This average based on all the review scores and displays number of reviews for each of the star options. There is also a list of product characteristics that show the average rating for each characteristic. Finally there is also an option to add your own review complete with image handling, required characteristics, and text input.

![](https://media.giphy.com/media/yeAuBPHxJzR9dBM7tq/giphy.gif)


## Getting Started

1. Download dependencies with:

   > `npm install`

2.  Set up `.env` file using `/example.env`:

    > `.env` requires github API key and a local PORT

3. Run webpack in development with:

   > `npm run client-dev`

4. Run server with:

   > `npm run server-dev`


## Technologies used
### **Set-up and Workflow**
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
### **Frontend Development**
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
### **Backend Development**
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
### **Deployment**
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
### **Testing**
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
