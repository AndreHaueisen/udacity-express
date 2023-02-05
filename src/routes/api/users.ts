import csvtojson from 'csvtojson/v2';
import fs from 'fs';

import express from 'express';

const users = express.Router();

users.get('/convert', async (_, res): Promise<void> => {
  const jsonObj = await processCSVFile();
  await saveJsonToFile(jsonObj);

  res.send(jsonObj);
});

async function processCSVFile(): Promise<string> {
  const jsonObj = await csvtojson().fromFile('/Users/andrehaueisen/Cloud Functions/udacity-express/assets/users.csv');

  const newData = jsonObj.map((item: { first_name: string; last_name: string; phone: string }) => {
    const first = item.first_name;
    const last = item.last_name;
    let phoneNumber = item.phone;
    console.log(phoneNumber);
    if (phoneNumber === '') {
      phoneNumber = 'Missing data';
    }

    return { first, last, phoneNumber };
  });

  return JSON.stringify(newData);
}

async function saveJsonToFile(json: string): Promise<void> {
  const path = '/Users/andrehaueisen/Cloud Functions/udacity-express/assets/users-processed.json';

  fs.writeFile(path, json, 'utf-8', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

export default users;
