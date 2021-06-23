const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
//const { listBoard } = require('./services/board');
const {
  listBoard,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
} = require("./services/board");

const { connect: dbConnect } = require("./models");

dbConnect();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("my server");
});

app.get("/api/board", async (req, res) => {
  const boards = await listBoard();
  res.send(boards);
});

app.get("/api/board/:id", async (req, res) => {
  const board = await getBoardById(Number(req.params.id));
  res.send(board);
});

app.post("/api/board", async (req, res) => {
  await addBoard({
    boardId: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  res.send("입력 완료");
});

app.put("/api/board", async (req, res) => {
  await updateBoard({
    boardId: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  res.send("수정 완료");
});

app.delete("/api/board", async (req, res) => {
  await deleteBoard({ boardId: req.body.id });
  res.send("삭제 완료");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
