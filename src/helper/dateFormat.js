export function formatDate(date) {
  let y = date.substring(0, 4);
  let m = parseInt(date.substring(4, 6), 10);
  let d = date.substring(6, 8);
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let mm = months[m - 1];
  return (`${d}-${mm}-${y}`);
}
