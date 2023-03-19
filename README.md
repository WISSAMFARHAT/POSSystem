POS System
==========

This is a small POS (Point of Sale) system developed using ASP.NET MVC and .NET 7. The main purpose of this project is to store and retrieve data from a WAMP server database. The system allows users to scan the barcode of an item to retrieve its price from the database and calculate the total price of a transaction based on the quantity of items purchased. Additionally, the system can convert the price of an item in dollars to its equivalent value in Lebanese pounds.

Getting Started
---------------

To use the system, you need to follow these steps:

1.  Clone the repository to your local machine.
2.  Open the project in Visual Studio or any other code editor that supports .NET 7.
3.  Open the `appsettings.json` file and update the connection string to point to your WAMP server database.
4.  Run the project and navigate to the home page.

Usage
-----

The system has one main page that contains all the functionality:

1.  Home page: This is the main page of the system. It displays a table of all the items in the database and allows users to search for an item by its barcode. The system also allows users to add or update items in the database by clicking the "New/Update Product" button. This will open a popup page where the user can enter the details of the item, including the barcode, name, price, and whether the price is in dollars or Lebanese pounds. The system can convert the price of an item in dollars to its equivalent value in Lebanese pounds based on the current exchange rate.

2.  Dollar rate page: This page allows authorized users to change the exchange rate between dollars and Lebanese pounds. To access this page, click the dollar icon on the top right corner of the home page. This will open a popup page where the user can enter the new exchange rate.

Contributing
------------

If you want to contribute to the project, please follow these guidelines:

1.  Fork the repository and clone it to your local machine.
2.  Create a new branch for your changes.
3.  Make your changes and commit them to your branch.
4.  Push your changes to your forked repository.
5.  Create a pull request to merge your changes into the main repository.
