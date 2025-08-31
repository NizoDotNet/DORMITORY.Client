import { UserStore } from "@/stores/UserStore";

export const uploadImage = async (file, url) => {
  const userStore = UserStore();
  userStore.isLoading = true;
  try {
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
  } catch (er) {
    if (er.response.status === 400) {
      if (Object.hasOwn(er.response.data, "Length")) {
        alert(er.response.data.Length[0]);
      }
      if (Object.hasOwn(er.response.data, "ContentType")) {
        alert(er.response.data.ContentTypeg[0]);
      }
    }
  } finally {
    userStore.isLoading = false;
  }
};
