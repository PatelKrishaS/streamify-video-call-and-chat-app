import multiavatar from "@multiavatar/multiavatar";
import cloudinary from "../lib/cloudinary.js";

export async function generateRandomAvatar(seed) {
  const svg = multiavatar(seed);

  const base64Image =
    `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  const uploadResponse =
    await cloudinary.uploader.upload(base64Image);

  return uploadResponse.secure_url;
}