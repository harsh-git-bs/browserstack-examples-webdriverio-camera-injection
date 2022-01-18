import axios from "axios";
import { createReadStream } from "fs";
import FormData from "form-data";

let app_path = "./test/upload/resources/sample_app/CameraImage-debug.apk";

const formData = new FormData();
const appPath = createReadStream(app_path);

formData.append("file", appPath);
formData.append("custom_id", "cameraApp");

var config = {
  url: "https://api-cloud.browserstack.com/app-automate/upload",
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
    console.log("App uploaded Successfully!");
    return response.data.app_url;
  })
  .catch((error) => {
    console.log("App upload Failed!");
    console.log(error);
  });

export { axios_response };
