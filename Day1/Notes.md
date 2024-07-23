
# Node.js Employee Data Retrieval App

## Overview

A developer from Global Hope Consortium is creating a Node.js application designed to make an outbound GET request to retrieve data about a particular employee. Once the data is received, it will be appended to the end of a file named `employees.txt`.

## Objectives

- **Make an outbound GET request** to retrieve employee data.
- **Append the retrieved data** to the `employees.txt` file.
- **Handle errors** appropriately during the request and file operations.

## Repository Structure

- **`exercise.js`**: The main Node.js script that makes the GET request and appends data to the file.
- **`employees.txt`**: The file where employee data will be appended.

## Code Snippet

Below is the link to the core code that performs the GET request and appends the data to the `employees.txt` file:


## How to Run

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the script**:
    ```sh
    node exercise.js
    ```

## Links

- [Main Script (`exercise.js`)](./exercise.js)
- [Employee Data File (`employees.txt`)](./employees.txt)

## Error Handling

The script includes basic error handling to log errors encountered during the HTTP request and file append operations.

---