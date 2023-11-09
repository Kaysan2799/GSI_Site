import cloudinary from 'cloudinary';
import multiparty from 'multiparty';
// import initMiddleware from '../../lib/init-middleware';

cloudinary.v2.config({
    cloud_name: 'serenaproject',
    api_key: '854932294567319',
    api_secret: 'LWXTwlOA2ncBbP5eB0DC4DpzZTg',
});

export const config = {
    api: {
      bodyParser: false,
    },
  };
  
/**
 * Handles a POST request for file upload.
 * 
 * This function handles a POST request for file upload. It checks if the request method is POST, 
 * parses the form data, validates the file type and size, uploads the file to Cloudinary, and 
 * returns the secure URL of the uploaded file.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: `Image upload failed because ${err.message}` });
      }

      const file = files.file[0];
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const allowedSize = 5 * 1024 * 1024; // 5MB
      if (!allowedTypes.includes(file.headers['content-type']) || file.size > allowedSize) {
        return res.status(400).json({ error: 'Invalid file type or size' });
      }
      const uploadResponse = await cloudinary.v2.uploader.upload(file.path, {
        folder: 'uploads',
      });

      return res.status(200).json({ url: uploadResponse.secure_url });
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: error.message });
  }
}
