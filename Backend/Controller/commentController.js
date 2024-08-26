const comments = require("../Models/commentsSchema");

const createComment = async (req, res) => {
  let id = req.params?.postId;
  try {
    if (id) {
      const commentCreated = await comments.create({
        postId: String,
        id:Number,
        username: req.body?.username,
        comment: req.body?.comment,
      });

      res.status(201).send(commentCreated);
    } else {
      res.status(404).json({ message: "Post with this id not found!" });
    }
  } catch (error) {
    res.status(401).json({
      message: "Problem with Getting Comment From Server",
      error: error,
    });
  }
};



module.exports = createComment;
