const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(
    cors({
        origin: `http://127.0.0.1:5501`,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type"],
    })
);

app.use(express.json());
app.use(express.text());

let data = { message: "여러분 화이팅!" };

app.get("/message", (req, res) => {
    res.json(data);
});

app.post("/message", (req, res) => {
    data.message = req.body;
    res.send(`${req.body}`);
});
app.put("/message", (req, res) => {
    data.message = req.body;
    res.send(`${req.body}`);
});
app.delete("/message", (req, res) => {
    data = {};
    res.send(`${req.body}`);
});

app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT} 에서 서버 실행`);
});

// server.js

// const http = require("http");

// CORS 설정을 위한 헤더
// const headers = {
//     "Access-Control-Allow-Origin": "http://127.0.0.1:9000",
//     "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE",
//     "Access-Control-Allow-Headers": "Content-Type",
// };
// const server = http.createServer((req, res) => {
//     if (req.method === "OPTIONS") {
//         res.writeHead(204, headers);
//         res.end();
//         return;
//     }

//     if (req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "application/json", ...headers });
//         res.end(JSON.stringify(data));
//     }

//     if (req.method === "POST") {
//         let body = "";
//         req.on("data", (chunk) => {
//             body += chunk.toString();
//         });

//         req.on("end", () => {
//             data.message = body;
//             res.writeHead(200, headers);
//             res.end(`받은 POST 데이터: ${body}`);
//         });
//     }

//     if (req.method === "PUT") {
//         let body = "";
//         req.on("data", (chunk) => {
//             body += chunk.toString();
//         });

//         req.on("end", () => {
//             data.message = body;
//             res.writeHead(200, headers);
//             res.end(`업데이트된 데이터: ${body}`);
//         });
//     }

//     if (req.method === "DELETE") {
//         data = {};
//         res.writeHead(200, headers);
//         res.end("데이터가 삭제되었습니다.");
//     }
// });

// server.listen(3000, () => {
//     console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");

// });
