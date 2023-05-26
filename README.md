<div align="center">
    <img src="https://github.com/CJSeiler/ramseys-crafts/assets/82341510/ff7ffb9d-a2c3-4acf-a9fd-117c5a205ee3" alt="store logo" width="300" height="200" align="center" />
</div>

# Ramsey's Craft Store (Mock E-commerce)


Ramsey's Craft Store is a fully functional mock e-commerce website developed as a learning project, designed to showcase the implementation of various technologies and features commonly found in real-world e-commerce platforms. The website primarily focuses on the sale of crochet items, providing users with an immersive shopping experience.<br></br>

## Description

Ransey's Craft Store incorporates several key features to simulate the functionality of a real e-commerce website:
<br></br>

### Key Features

* **Authentication and Registration:** Users can create accounts and log in securely using JSON Web Tokens (JWT). This ensures that sensitive user information is protected, allowing for a personalized experience with features like saved carts and order history.

* **Contact Page:** A dedicated contact page is provided, enabling users to easily reach out to the website administrators or customer support for inquiries, feedback, or assistance. The input fields for the contact form are restricted using regular expressions (regex) to ensure valid and properly formatted data is submitted.

* **Checkout and Payment:** Users can select items, add them to their cart, and proceed to the checkout process. Integrated payment functionality ensures secure transactions, allowing users to complete purchases using various payment methods. The credit card details input fields are also restricted using regex for enhanced data validation.

* **Profile and Edit Profile:** Each user has a profile page where they can view and manage their personal information, saved addresses, and account settings. Users can update their profiles, view order history, and track ongoing orders.

* **Address Verification with Google API:** To enhance the accuracy and reliability of shipping information, the website employs Google's Address Verification API. This helps users ensure that their entered addresses are valid and complete, reducing potential delivery issues. The address input fields are also validated using regex to maintain data integrity.

* **Security:** CrochetEcommerce prioritizes the security of user information and transactions. Measures such as password encryption, secure communication protocols, and input validation using regex are implemented to safeguard user data and maintain the integrity of the website.
<br></br>

### Built With

* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express]][Express-url]
* [![Redux][Redux]][Redux-url]
* [![MongoDB][MongoDB]][MongoDB-url]
<br></br>

## Getting Started

### Prerequisites

Before cloning the repository, ensure that you have the following prerequisites installed on your machine:

   * Git: [Installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   * Node.js: [Installation guide](https://nodejs.org/en)
<br></br>

### Cloning the Repository

To clone the repository, open a terminal or command prompt and run the following command:

   ```
   git clone https://github.com/CJSeiler/ramseys-crafts.git
   ```

This will create a local copy of the repository on your machine.
<br></br>

### Setting up the Development Environment

   1. Navigate to the project's root directory:
    
      ```
      cd ramseys-crafts
      ```

   2. Install the necessary dependencies for the frontend by navigating to the frontend directory:

        ```
        cd frontend
        npm install
        ```

   3. Next, navigate to the Server directory to install the dependencies for the server:

        ```
        cd Server
        npm install
        ```

By navigating to the respective directories (frontend and Server) and running npm install, you will ensure that all the required dependencies are installed for both the frontend and server components of the application.
<br></br>

### Running the Application

Once you have cloned the repository and installed the dependencies, you can run the application locally. Follow the steps below:

   1. Start the server:

       * Open a new terminal or command prompt.

       * Navigate to the Server directory:

          ```
          cd ramseys-crafts/Server
          ```

       * Run the following command to start the server:
          ```
          npm run server
          ```

       This command will start the server, and it will be listening on a specific port.

  2. Start the frontend:

      * Open another terminal or command prompt.
      * Navigate to the frontend directory:

          ```
          cd ramseys-crafts/frontend
          ```

      * Start the frontend application:

          ```
          npm start
          ```

   This command will start the frontend application and launch it in your default web browser. If the browser does not open automatically,    you can access the application by visiting http://localhost:3000 in your browser.

By following these steps, you will start both the server and the frontend, allowing you to use the Ramsey's Crafts application locally on your machine.
<br></br>


## Authors

Cody Seiler
[LinkedIn](https://www.linkedin.com/in/cody-seiler/)
<br></br>

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
<br></br>

## Acknowledgments
* [fkhadra](https://github.com/fkhadra/react-toastify) (React-Toastify)
* [Nadia Clabassi](https://unsplash.com/@foifezza) (Photograph)
* [Bea Marciniak](https://unsplash.com/@freespirit_fotografica) (Photograph)
* [Kate McLean](https://unsplash.com/@justkate__) (Photograph)
* [Glenn Carstens-Peters](https://unsplash.com/@glenncarstenspeters) (Photograph)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js
[Node-url]: https://nodejs.org/en
[Express]: https://img.shields.io/badge/Express.js-20232A?style=for-the-badge&logo=express
[Express-url]: https://expressjs.com/
[Redux]: https://img.shields.io/badge/Redux-8a8a8a?style=for-the-badge&logo=redux&logoColor=764abc
[Redux-url]: https://redux.js.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-00684a?style=for-the-badge&logo=MongoDB
[MongoDB-url]: https://www.mongodb.com/
