const sampleResponse = {
  "session": {
    "id": "session_id",
    "params": {
      "key": "value"
    }
  },
  "prompt": {
    "override": false,
    "firstSimple": {
      "speech": "Hello world.",
      "text": "Hello world."
    }
  },
  "user": {
    "locale": "en-US",
    "params": {
      "verificationStatus": "VERIFIED",
      "key": "value"
    }
  },
  "home": {
    "params": {
      "key": "value"
    }
  }
}


export default (req, res) => {
  console.log(req);
  console.log('query: ', req.intent?.query);
  res.status(200).json(sampleResponse);
}
