const BoardModel = require('../../models/board');

exports.listBoard = async () => {
  try {
    const boards = await BoardModel.find({}).exec();
    return boards;
  } catch (err) {
    console.error(err);
    return [];
  }
};

exports.getBoardById = async (boardId) => {
  try {
    const board = await BoardModel.findOne({ id: boardId }).exec();
    return board;
  } catch (err) {
    console.error(err);
    return {};
  }
};

exports.addBoard = async ({ title, contents, price, category, imageKink }) => {
  try {
    await BoardModel.create({
      title,
      contents,
      price,
      category,
      imageLink,
    });
  } catch (err) {
    console.error(err);
    return {};
  }
};

exports.updateBoard = async ({
  boardId,
  title,
  contents,
  price,
  category,
  imageLink,
}) => {
  try {
    const query = { _id: boardId };
    await BoardModel.updateOne(query, {
      title,
      contents,
      price,
      category,
      imageLink,
    }).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

exports.deleteBoard = async ({ boardId }) => {
  try {
    const query = { _id: boardId };
    await BoardModel.deleteOne(query).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

// module.exports = {
// listBoard,
//   getBoardById,
//   addBoard,
//   updateBoard,
//   deleteBoard,
// };
