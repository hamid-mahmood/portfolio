export const downloadResume = () => {
  fetch("Hamid-Mahmood.pdf").then((response) => {
    response.blob().then((blob) => {
      // create new object of PDF file
      const fileUrl = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileUrl;
      alink.download = "Hamid-Mahmood.pdf";
      alink.click();
    });
  });
};
