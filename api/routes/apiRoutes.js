import express from 'express';
import { testDatabase } from '../controllers/testDatabaseController.js';
import { login, register } from '../controllers/userController.js';
import multer from 'multer'

const router = express.Router();

router.get('/meow', function(req, res){
    res.send('meow');
});

router.get('/test', function(req, res){
    res.send('test');
});

router.get('/database', testDatabase);

router.post('/user/login', login)

router.post('/user/register', register)




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Route POST pour l'upload d'image
router.post('/user/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    console.log(req.file)
    var typeOfFile = req.file.originalname.split('.')
    console.log(typeOfFile)
    console.log(typeOfFile[typeOfFile.length - 1])
    if(typeOfFile[typeOfFile.length - 1] == "jpg" || typeOfFile[typeOfFile.length - 1] == "png"){
        res.status(200).json({
            status: 'Success'
        });
    }else{
        res.status(400).json({
            status: 'Failed',
            message: "Type of file is wrong",
        });
    }
    // Traitez le fichier, par exemple, enregistrez-le en base de données ou déplacez-le vers un emplacement permanent
  } else {
    res.status(400).json({
        status: 'Failed',
        message: "No image file found.",
    });
  }
});

//export this router to use in our index.js
export default router