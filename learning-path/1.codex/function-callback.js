
// // Function likes a parameter (callback)
// var coffeeMachine = {
//   makeCoffee: function (onFinish) {
//     console.log('Making coffee...');
//     onFinish();
//   }
// };
 
// var beep = function () {
//   console.log('ti ti ti');
// };

// coffeeMachine.makeCoffee(beep); //naming convention

// //  
// coffeeMachine.makeCoffee(function () {
//   console.log('s2 s2')
// });

/**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, 
 * chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách: 
 *   countAndDo(sayHello)
 */

// function sayHello() {
//   console.log('I love Coders.Tokyo');
// };

// function countAndDo(callback) {
//   for (let i = 0; i < 11; ++i){
//     console.log(i);
//     callback();
//   }
// }
// countAndDo(sayHello);


/**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */

// function double(num) {
//   return num*2
// }

// function sumAndDo(nums, callback) {
//   // viết code ở đây.
//   if (sum = '') {
//     sum = 0;
//   } else {
    
//     var sum = 0;
//     for (i = 0; i < nums.length; i++){
//       sum += nums[i];
//     };
//     // console.log(sum);
//     callback(double(sum));
//     // console.log(double(sum));
//     return (double(sum));
//   }
// }
// sumAndDo([], double);


/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. 
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, 
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */
 
function transform(numbers, callback) {
  // Viết nội dung hàm ở đây 
  var result = [];
  for (let i = 0; i < numbers.length; i++){
    result.push(double(numbers[i]));
    // callback(double(numbers[i]))
    
  }
  return result;
  // console.log(result)
}
  
function double(num) {
  // viết code ở đây
  return num * 2;
}
transform([1,2,3,4], double())

  