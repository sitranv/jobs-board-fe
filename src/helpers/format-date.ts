export const formatDate = (dateString: string) => {
  let date = new Date(dateString);
  
  let day = (date.getDate() > 9) ? date.getDate() : ('0' + date.getDate());
  let month = (date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))
  let year = date.getFullYear();

  return day + "/" + month + "/" + year;
}