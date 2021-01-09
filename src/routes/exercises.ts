import express from 'express';
const router = express.Router();

import exercisesSorter from '../utils/exercisesSorter';


router.get('/:pageID', (req, res) => res.render('exercises/' + req.params.pageID, {rightAnswers: null, wrongAnswers: null, sorter: null}));
router.post('/:pageID', (req, res) => {
    /*
        * Object.entries will be an array of arrays:
            [ [ 'poll-3-1', 'checked' ], [ 'poll-1-2', 'checked' ] ]
        
        * Looping through this array and looking if the first index ( id ) is in the exercisesSorter.
        * exercisesSorter is an object containing all the right answers.

        * To get the wrong answers, get the Object.entries and remove the rightAnswers.
    */
    const rightAnswers = Object.entries(req.body).filter(key =>   key[0] in exercisesSorter);
    const wrongAnswers = Object.entries(req.body).filter(key => !(key[0] in exercisesSorter));

    return res.render('exercises/' + req.params.pageID, {rightAnswers, wrongAnswers, sorter: Object.keys(exercisesSorter)});
});

export default router;
