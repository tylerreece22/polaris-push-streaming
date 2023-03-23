# Polaris push ingestion
The purpose of this repo is to make push ingestion simple when you have multiple files you need to ingest, periodically or otherwise.

## Setup
- Follow instructions on the official [Polaris api stream docs](https://docs.imply.io/polaris/api-stream/) so Polaris is ready for data
- Run `npm i` to install dependencies
- Add files to ingest to the `./files` folder
- Update `POLARIS_URL` and `POLARIS_API_KEY` varibles
- Run `node .`

## Gotchas
- Keep in mind the Polaris table should have a predefined schema 
- The schema of your data on all files should match the predefined table schema
