// import multer from "multer";

// const upload = multer({dest:"uploads/"});
// export default upload


import multer from "multer";

const storage = multer.memoryStorage(); // store files in memory
const upload = multer({ storage });

export default upload;
