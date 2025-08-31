import axios from "axios";

export const uploadImageUtil = async (file, url) => {
  const formData = new FormData();
  formData.append("uploadFile", file.value);
  const res = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (res.status === 200) {
    window.location.reload();
  }
};
