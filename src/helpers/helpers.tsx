export const formatDate = (dateString: string) => {
  let date = new Date(dateString);
  
  let day = (date.getDate() > 9) ? date.getDate() : ('0' + date.getDate());
  let month = (date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))
  let year = date.getFullYear();

  return day + "/" + month + "/" + year;
}

export const formatText = (text: string) => {
  return text.split("\n").map((element) => {
    return (
     <p style={{
       marginBottom: '5px'
     }}>{element}</p>
    )
  });
}

export const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};