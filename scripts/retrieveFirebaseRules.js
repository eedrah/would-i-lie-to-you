const fs = require('fs')
const os = require('os')
const request = require('request')

const PROJECT_NAME = 'would-i-lie-to-you'

fs.readFile(
  os.homedir() + '/.secrets/git/' + PROJECT_NAME + '/firebase',
  'utf-8',
  (_, key) => {
    request(
      'https://' +
        PROJECT_NAME +
        '.firebaseio.com/.settings/rules.json?auth=' +
        key.trim()
    )
      .on('error', err => console.log(err))
      .on('response', response =>
        console.log(response.statusCode, response.statusMessage)
      )
      .pipe(fs.createWriteStream('../db/rules.json'))
  }
)
