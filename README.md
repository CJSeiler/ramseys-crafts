# Ramsey's Craft Store (Mock E-commerce)

CrochetEcommerce is a fully functional mock e-commerce website developed as a learning project, designed to showcase the implementation of various technologies and features commonly found in real-world e-commerce platforms. The website primarily focuses on the sale of crochet items, providing users with an immersive shopping experience.

## Description

CrochetEcommerce incorporates several key features to simulate the functionality of a real e-commerce website:

### Key Features

* **Authentication and Registration:** Users can create accounts and log in securely using JSON Web Tokens (JWT). This ensures that sensitive user information is protected, allowing for a personalized experience with features like saved carts and order history.

* **Contact Page:** A dedicated contact page is provided, enabling users to easily reach out to the website administrators or customer support for inquiries, feedback, or assistance. The input fields for the contact form are restricted using regular expressions (regex) to ensure valid and properly formatted data is submitted.

* **Checkout and Payment:** Users can select items, add them to their cart, and proceed to the checkout process. Integrated payment functionality ensures secure transactions, allowing users to complete purchases using various payment methods. The credit card details input fields are also restricted using regex for enhanced data validation.

* **Profile and Edit Profile:** Each user has a profile page where they can view and manage their personal information, saved addresses, and account settings. Users can update their profiles, view order history, and track ongoing orders.

* **Address Verification with Google API:** To enhance the accuracy and reliability of shipping information, the website employs Google's Address Verification API. This helps users ensure that their entered addresses are valid and complete, reducing potential delivery issues. The address input fields are also validated using regex to maintain data integrity.

* **Security:** CrochetEcommerce prioritizes the security of user information and transactions. Measures such as password encryption, secure communication protocols, and input validation using regex are implemented to safeguard user data and maintain the integrity of the website.


### Built With

* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express]][Express-url]
* [![Redux][Redux]][Redux-url]
* [![MongoDB][MongoDB]][MongoDB-url]

## Getting Started


### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Authors

Contributors names and contact info

## Version History


## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments
* [fkhadra](https://github.com/fkhadra/react-toastify)(React-Toastify)

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
