Salary Calculator API
This project is a REST API developed with Node.js and Express to calculate gross salary and other details based on the input net salary and allowances. The calculation includes a 10.5% employer pension contribution and 18% employee pension in tiers and applies a graduated tax rate from the Ghana Revenue Authority (GRA) 2024.

Features
Receives net salary and allowances as input.
Calculates gross salary.
Includes a 10.5% Employee and 18% Employer pension deduction based on different tiers.
Applies graduated tax rates as per 2024 GRA regulations.
Provides detailed breakdown of the calculations.
Installation
Clone the repository:

Copy code
git clone https://github.com/KhobbyLynx/GrossFromNet.git
Navigate to the project directory:

Copy code
npm install
Usage
Start the server:

Copy code
npm start
The API will be available at http://localhost:5000/api/.

Endpoints
POST /salary/calculate: Receives net salary and allowances and returns gross salary and other details.
Request Body:
json
Copy code
{
    "desiredNetSalary": number,
    "allowances": number
}
Response:
json
Copy code
{
    "grossSalary": string,
    "employeePension": string,
    "employerPension": string,
    "payeTax": string,
    "netSalary": string,
    "allowances": string
}
Testing
This project uses Jest for testing. To run the tests:

bash
Copy code
npm test

Contact
For any inquiries or issues, please contact khobbylynx55@gmail.com
