# contact-form-db

A simple website visitor counter API.

## Installation
1. Clone the repository onto your machine.
2. Start the `index.js` file.

## Usage
### Submit Form
To record a submission, make a `POST` request to `localhost:6017/form/{YOUR SET NAME}`. Each set will need a unique name. You can make the name anything you want, but it must be alphanumeric and contain no spaces.

### Read Submissions
To read the form submissions, just make a `GET` request to `localhost:6017/form/{YOUR SET NAME}`.

© IzMichael 2022 - Licensed under Apache 2.0