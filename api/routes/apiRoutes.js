import express from 'express';
import { testDatabase } from '../controllers/testDatabaseController.js';
import { login, register, profilPicture } from '../controllers/userController.js';
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

router.post('/user/profilPicture', profilPicture)



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
  // Fichier envoyé accessible via req.file
  console.log(req)
  if (req.file) {
    console.log(req.file)
    // Traitez le fichier, par exemple, enregistrez-le en base de données ou déplacez-le vers un emplacement permanent
    res.status(200).send('Image uploaded successfully.');
  } else {
    res.status(400).send('No image file found.');
  }
});

//export this router to use in our index.js
export default router