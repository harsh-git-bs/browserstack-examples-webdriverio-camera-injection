import axios from "axios";
import { createReadStream } from "fs";
import FormData from "form-data";

let media_path = "./test/upload/resources/sample_image/bstack.jpg";
// let media_path = "./test/upload/resources/sample_image/logo.png";

const formData = new FormData();
const mediaPath = createReadStream(media_path);

formData.append("file", mediaPath);
formData.append("custom_id", "sampleMedia");

var config = {
  url: "https://api-cloud.browserstack.com/app-automate/upload-media",
  method: "post",
  headers: formData.getHeaders(),
  auth: {
    username: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
    password: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
  },

  data: formData,
};

const axios_response = axios(config)
  .then((response) => {
    console.log("Media uploaded Successfully!");
    return response.data.media_url;
  })
  .catch((error) => {
    console.log("Media upload Failed!");
    console.log(error);
  });

export { axios_response };
