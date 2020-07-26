import { Router } from 'express';
const ROOT_LOCATION = process.mainModule.path.replace(/src/g, "");
const DATA_LOCATION = "assets/data/";

var fs = require('fs');
const router = Router();

router.get('/', (req, res) => {
  return res.send({ msg: "JSON server" });
});

router.get('/:fileName', (req, res) => {
  let filePath = ROOT_LOCATION + DATA_LOCATION + req.params.fileName + ".json";
  var data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return res.send(data);
});

router.put('/mark/all/:fileName/seen', (req, res) => {
  let filePath = ROOT_LOCATION + DATA_LOCATION + req.params.fileName + ".json";
  var data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  let updated = [];

  data.forEach(message => {
    message.seen = true;
    updated.push(message);
  });
  writeToFile(filePath, JSON.stringify(updated));
  return res.send(JSON.stringify(true));
});

router.put('/toggle/:fileName/:id/:state', (req, res) => {
  let filePath = ROOT_LOCATION + DATA_LOCATION + req.params.fileName + ".json";
  var data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  let updated = [];

  data.forEach(message => {
    if (req.params.id == message.id) {
      message.seen = (req.params.state === 'true');
    }
    updated.push(message);
  });
  writeToFile(filePath, JSON.stringify(updated));
  return res.send(JSON.stringify(true));
});

export default router;

function writeToFile(path, content) {
  fs.writeFile(path, content, function (err) {
    if (err) {
      return "err";
    }
    return "Success";
  });
}
