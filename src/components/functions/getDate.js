export const getCurrentDate = () => {
  var dt = changeTimeZone(new Date,'HST')
  var date = dt.getDate();
  var month = dt.getMonth() + 1;
  var year = dt.getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
console.log('timezone' ,changeTimeZone(new Date, 'HST'))
  return year + "-" + month + "-" + date; //format: d-m-y;
};

function changeTimeZone(date, timeZone) {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    }),
  );
}