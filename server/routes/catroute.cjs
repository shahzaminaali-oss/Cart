const router=require('express').Router()
const {catCon,catView,getProduct,deleteProduct}=require('../controllers/catcon.cjs')
const catMid=require('../middleware/catmid.cjs')
const multer=require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/"); // folder for images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/cat', upload.single("img"), catMid, catCon )
router.get('/view',catView)
router.get('/pro/:id', getProduct)
router.delete('/catdel/:id',deleteProduct)
module.exports=router
