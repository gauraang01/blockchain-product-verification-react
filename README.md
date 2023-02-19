# Project title
Product Authenticity Verification Website with Blockchain Integration

# Project Description
This project is a website that allows users to verify the authenticity of their products using blockchain technology. The website leverages the security and transparency features of blockchain to ensure the integrity of the product verification process.

Companies can register on the website to receive a customized smart contract that will serve as a registry of all the products they produce. This smart contract will be made publicly accessible, allowing any individual to verify the authenticity of a product by checking its presence on the corresponding smart contract.

The website is built using modern web development technologies, with the frontend developed using React. The backend is built using blockchain technology, with smart contracts created using Solidity. The website provides a user-friendly interface for product verification, allowing users to easily check the authenticity of a product by scanning a QR code or entering the product's unique identifier.

This project provides a secure and reliable solution for product authenticity verification, enabling companies to build trust with their customers and reduce the risks of counterfeit products.

##Link to a demo site:
[productverify](https://productverify.netlify.app/)

# Important
    * To access the functionalities of the project you must have a wallet extension in your browser
    * Only the owner of a smart contract can add products to it's smart contract
    * The products can be read by anyone
    * You can enter id of a single product, or a list separated by comma, the id's should be integer value

# Installation
    * Clone the repository
    * Run npm install
    * Run npm start
    
# Usage
    * To create a smart contract for your organization visit: CreateContract page
    * To fetch smart contract address linked to a wallet address visit: GetContract page
    * To add products to your smart contract visit: AddProducts page
    * To verify the authenticity of a product visit: VerifyProduct page
