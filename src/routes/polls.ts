import express from 'express';
const router = express.Router();

import pollsSorter from '../utils/pollsSorter';


router.post('/', (req, res) => {
    /*
        * Object.entries will be an array of arrays:
            [ [ 'poll-3-1', 'checked' ], [ 'poll-1-2', 'checked' ] ]
        
        * Looping through this array and looking if the first index ( id ) is in the pollsSorter.
        * PollsSorter is an object containing all the right answers.

        * To get the wrong answers, get the Object.entries and remove the rightAnswers.
    */
    console.log(req.body);
    
    // const rightAnswers = Object.entries(req.body).filter(key => key[0] in pollsSorter);
    // const wrongAnswers = Object.entries(req.body).filter(key => !(key[0] in pollsSorter))

    // console.log(rightAnswers);
    // console.log(wrongAnswers);
    
    res.send('Hello World!');
});

export default router;
