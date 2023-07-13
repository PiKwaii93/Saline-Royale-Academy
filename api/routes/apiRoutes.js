import express from 'express';
import { testDatabase } from '../controllers/testDatabaseController.js';
import { login, register } from '../controllers/userController.js';
import multer from 'multer'
import * as fs from 'fs';

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
        const fileType = file.mimetype.split('/')[1]; 
        const filename = req.body.id + '-profilePicture.' + fileType;
        cb(null, filename);
    },
  });
  
  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
      const allowedMimeTypes = ['image/jpeg', 'image/png'];
  
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type. Only JPEG and PNG images are allowed.'));
      }
    },
  });
  
  // Middleware d'erreur personnalisé pour capturer les erreurs de téléchargement
  const handleUploadError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      // Erreur de Multer lors du téléchargement de l'image
      res.status(400).json({ error: 'Image upload failed.' });
    } else {
      // Erreur inattendue
      res.status(500).json({ error: 'Internal server error.' });
    }
  };



router.post('/user/upload', (req, res, next) => {
    upload.single('image')(req, res, (err) => {
      if (err) {
        handleUploadError(err, req, res, next);
      } else {
        // Récupérer l'ID depuis le corps de la requête
        const id = req.body.id;
        const fileType = req.file.mimetype.split('/')[1]; 
        const path = "./uploads/undefined-profilePicture.jpeg"
        const newPath = path.replace('undefined', id)
        if (fs.existsSync(path)) {
            fs.renameSync(path, newPath)
        }

        // Fichier envoyé accessible via req.file
        if (req.file && id) {
          // Traitez le fichier, par exemple, enregistrez-le en base de données ou déplacez-le vers un emplacement permanent
          res.status(200).json({
                status: 'Success'
            });
        } else {
            res.status(400).json({
                status: 'Failed',
                message: "Type of file is wrong",
            });
        }
      }
    });
  });

//export this router to use in our index.js
export default router