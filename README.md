# Salary Calculator API

This project is a REST API developed with Node.js and Express to calculate gross salary and other details based on the input net salary and allowances. The calculation includes a 10.5% employer pension contribution and 18% employee pension in tiers and applies a graduated tax rate from the Ghana Revenue Authority (GRA) 2024.

![Project Question](https://res.cloudinary.com/khobbylynx/image/upload/v1719766620/justclick/GRA-Tax_BackEnd-2024_dijb4x.jpg)

## Features

- Receives net salary and allowances as input.
- Calculates gross salary.
- Includes a 10.5% Employee and 18% Employer pension deduction based on different tiers.
- Applies graduated tax rates as per 2024 GRA regulations.
- Provides detailed breakdown of the calculations.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/KhobbyLynx/GrossFromNet.git
    ```

2. Navigate to the project directory:

    ```bash
    cd GrossFromNet
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. The API will be available at `http://localhost:5000/api/`.

### Endpoints

- **POST /salary/calculate**: Receives net salary and allowances and returns gross salary and other details.
    - Request Body:
        ```json
        {
            "desiredNetSalary": number,
            "allowances": number
        }
        ```
    - Response:
        ```json
        {
            "grossSalary": string,
            "employeePension": string,
            "employerPension": string,
            "payeTax": string,
            "netSalary": string,
            "allowances": string
        }
        ```

## Testing

This project uses Jest for testing. To run the tests:

```bash
npm test
