import express from 'express';
const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('http://localhost:5500/frontend/index.html')
});

export default router;
