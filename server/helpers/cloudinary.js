const cloudinary = require("cloudinary").v2;
const multer = require("multer");

const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

function resolveConfigValue(value, fallback = "") {
  return (value || fallback || "").trim();
}

cloudinary.config({
  cloud_name: resolveConfigValue(CLOUDINARY_CLOUD_NAME),
  api_key: resolveConfigValue(CLOUDINARY_API_KEY),
  api_secret: resolveConfigValue(
    CLOUDINARY_API_SECRET
  ),
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
