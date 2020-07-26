import { Router } from 'express';
const ROOT_LOCATION = process.mainModule.path.replace(/src/g, "");
const FILE_LOCATION = "assets/images/";

const router = Router();

router.get('/', (req, res) => {
    return res.send({ msg: "file server" });
});

router.get('/download/:fileName', function (req, res) {
    let filePath = ROOT_LOCATION + FILE_LOCATION + req.params.fileName;
    res.download(filePath);
});

export default router;
