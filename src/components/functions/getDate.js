export const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  console.log(year + "-" + month + "-" + date);
  return year + "-" + month + "-" + date; //format: d-m-y;
};
