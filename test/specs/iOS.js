// import { axios_response as mediaUploadApiResponse } from "../upload/media_upload.mjs";
// import { writeFile, readFile } from "fs";

//bs://790c59917d7e357a0f967f36a9ef651472726013

describe("iOS Camera Injection", () => {
  it("Captures injected image for iOS", async () => {
    var takePhotoButton = await $(`[name="Take Photo"]`);
    await takePhotoButton.click();

    var cameraButton = await $("~PhotoCapture");
    await cameraButton.click();

    var usePhotoButton = await $(`[name="Use Photo"]`);
    await usePhotoButton.click();

    // await browser.saveScreenshot("sample.png");
  });
});
