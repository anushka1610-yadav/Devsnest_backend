var router = require("express").Router();
var path = require("path");
var fs = require("fs");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/video", function (req, res) {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Range is required");
  }

  const videoPath = path.join(__dirname, "../public/videos/titliya.mp4");
  const videoSize = fs.statSync(videoPath).size;

  const CHUNK_SIZE = 10 ** 6; //1mb
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Rangers": "bytes",
    "Content-Length": contentLength,
    "Content-type": "video/mp4",
  };

  res.writeHead(206, headers);

  const videoStream = fs.createReadStream(videoPath, { start, end });

  videoStream.pipe(res);
});

module.exports = router;
