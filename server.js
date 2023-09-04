// server.js
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// 리액트 앱을 빌드한 결과물은 build 폴더에 저장됩니다.
app.use(express.static(path.join(__dirname, "build")));

// 모든 요청을 React 앱으로 라우팅합니다.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
