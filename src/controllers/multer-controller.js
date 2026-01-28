export const uploadImage = (req,res) =>{
    try {
        if(!req.file){
            return res.status(400).json({
                message: "No file uploaded",
                success: false,
                data: {}
            })
        }
        return res.status(200).json({
            message: "Image uploaded successfully",
            success: true,
            data: {
                filename: req.file.filename,
                path: req.file.path,
                size: req.file.size
            }
        });
    } catch (error) {
        throw error;
        console.log("error in uploading image in controller")
    }
}

