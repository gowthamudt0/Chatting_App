const multer =require("multer")
const path =require('path')
const storage=multer.diskStorage({
    destination:'./uploads',
    filename:function(req,file,cb){
        cb(null,'image-'+Date.now()+path.extname(file.originalname))
    }
})
exports.upload=multer({storage:storage})