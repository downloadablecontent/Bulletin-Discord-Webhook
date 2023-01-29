Discord webhook for [Bulletin](https://github.com/downloadablecontent/Bulletin-Backend)

## Env variables
- **tino_bulletin_url**: Current url of tino bulletin, without a trailing slash. Eg: `https://backend-draft.user5829.repl.co`
- **credentials**: Firebase credentials (keep secret, obviously)
- **databaseURL**: Firebase database url
- **webhook_url**: Discord webhook url (keep secret or anyone can send to webhook)

## Running
`npm install` then `node index.js`
