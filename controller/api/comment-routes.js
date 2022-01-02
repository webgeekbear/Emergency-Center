const router = require('express').Router();
const {
    Comment
} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });


});

router.get('/view-posts"', withAuth ,(req, res)=> {
    res.render("view-posts")
})

module.exports = router;