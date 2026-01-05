// middleware/multerConfig.js
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const UPLOAD_BASE_DIR = "public/image";

const allowedImageTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let subfolder = "others";

    const categoryMap = {
      image: "rooms",
    };

    if (file.fieldname in categoryMap) {
      subfolder = categoryMap[file.fieldname];
    }

    const uploadDir = path.join(UPLOAD_BASE_DIR, subfolder);

    fs.mkdirSync(uploadDir, { recursive: true });

    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const name = path
      .basename(file.originalname, ext)
      .replace(/[^a-z0-9]/gi, "-")
      .toLowerCase();

    const uniqueName = `${Date.now()}-${name}${ext}`;

    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (allowedImageTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Only image files are allowed (jpg, jpeg, png, webp, gif)"),
      false
    );
  }
};

const multerConfig = {
  storage,
  fileFilter,
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
};

const upload = multer(multerConfig);

module.exports = {
  uploadSingleImage: upload.single("image"),
  uploadMultipleImages: upload.array("images", 10),

  uploadAnyImages: upload.fields([{ name: "image", maxCount: 1 }]),

  getImageUrl: (filename, category = "others") => {
    return `/uploads/${category}/${filename}`;
  },
};
