//tạo mảng chứa các số được nhập vào
var listNum = []
function addNum(){
    var enterNum = +document.getElementById('enterNum').value
    //thêm các số được nhập vào mảng đã tạo
    listNum.push(enterNum)
    //hiển thị dãy số trong mảng
    document.getElementById('showList').innerHTML = listNum
}
/* câu 1 */
function calcSum(){
    //tạo biến sum là tổng các số dương
    let sum = 0
    //tạo vòng lặp cho chạy lần lượt từ vị trí 0 -> cuối mảng,
    //nếu số thứ i trong mảng > 0 thì cộng vào biến sum (số 0 k phải số dương)
    for (var i = 0; i< listNum.length; i++){
        if(listNum[i] > 0){
            sum += listNum[i]
        }        
}
    document.getElementById('showSum').innerHTML = sum
}

/* câu 2 */
function countPos(){
    //tạo biến count là biến đếm số lượng số dương
    let count = 0
    //tạo vòng lặp cho chạy lần lượt từ vị trí 0 -> cuối mảng,
    //nếu số thứ i trong mảng > 0 thì tăng 1 vào biến count (số 0 k phải số dương)
    for (var i = 0; i< listNum.length; i++){
        if(listNum[i] > 0){
            count++
        }
    }
    document.getElementById('showPos').innerHTML = count
}

/* Câu 3 */
function findMin(){
    //gán số nhỏ nhất chính là số đầu tiên trong mảng
    min = listNum[0]
    //tạo vòng lặp cho chạy lần lượt từ vị trí 0 -> cuối mảng,
    //nếu số thứ i trong mảng < số min trước đó thì số đó chính là số nhỏ nhất
    for (var i = 0; i< listNum.length; i++){
        if(listNum[i] < min){
            min = listNum[i]
        }
    }
    document.getElementById('showMin').innerHTML = min
}

/* Câu 4 */
//tạo biến mảng bao gồm các số dương
var listPosNum = []
function findMinPos(){
    //tạo vòng lặp cho chạy lần lượt từ vị trí 0 -> cuối mảng,
    //nếu số thứ i trong mảng >0 thì thêm vào mảng đã tạo
    for (var i = 0; i<listNum.length; i++){
    if(listNum[i] > 0){
        listPosNum.push(listNum[i])
    }}
    //tạo biến số dương nhỏ nhất là số đầu tiên của mảng vừa tìm ra
    var minPos = listPosNum[0]
    //tạo vòng lặp cho chạy lần lượt từ vị trí 0 -> cuối mảng này,
    //nếu số thứ i trong mảng < số min trước đó thì số đó chính là số nhỏ nhất
    for (var i = 0; i< listPosNum.length; i++){
        if(listPosNum[i] < minPos){
            minPos = listPosNum[i]
        }
        // console.log(listNum[i])
    }
    document.getElementById('showMinPos').innerHTML = minPos
}
/* Câu 5 */
/* Cách 1: */
// var listEvenNum = []
// function findLastEven(){
//     for (var i = 0; i<listNum.length; i++){
//         if (listNum[i] % 2 === 0){
//             listEvenNum.push(listNum[i])
//             if (i = listEvenNum.length-1){
//                 document.getElementById('showLastEven').innerHTML = listEvenNum[i]
//             }
//         }
//         else if (listNum[i] % 2 !== 0){
//             document.getElementById('showLastEven').innerHTML = "Không có số chẵn nào trong dãy này"
//         }
//     }
// }
/* Cách 2: */
function findLastEven(){
    // gán cho một biến tạm thời là -1
    var lastEvenNum = -1
    //tạo vòng lặp cho chạy lần lượt từ vị trí cuối cùng (array.length-1) -> đầu mảng này,
    //nếu số thứ i trong mảng chia hết cho 2 thì đây chính là số chẵn đầu tiên
    for (var i = listNum.length-1; i>= 0; i--){
            if (listNum[i] % 2 === 0){
            lastEvenNum = listNum[i];
            break /* tìm được là thoát vòng lặp ngay */
    }    }
    document.getElementById('showLastEven').innerHTML = lastEvenNum !== -1? lastEvenNum: 'Không có sỗ chẵn nào trong mảng'
}

/* Câu 6 */
function swapNums(){
    //tạo biến lấy giá trị vị trí số muốn đổi mà người dùng nhập vào
    var i = document.getElementById('position-1').value
    var j = document.getElementById('position-2').value
    //tạo một biến tạm và gắn cho biến đó giá trị của số thứ nhất
    //gán giá trị của số thứ 2 vào số thứ nhất -> số thứ 2 được đổi qua vị trí số nhứ nhất
    //cuối cùng, gán giá trị biến tạm vào số thứ 2 -> số thứ nhất được đổi qua vị trí số thứ 2
    var temporary = listNum[i]
    listNum[i] = listNum[j]
    listNum[j] = temporary
    
    document.getElementById('arrayAfter').innerHTML = listNum
}

/* Câu 7 */
function sortArray(){
    // Truyền vào hàm sort 1 tham số là 1 hàm compare.
    listNum.sort(compare)
    // Hàm compare sẽ nhận vào 2 tham số a, b, return về a - b nghĩa là sắp xếp tăng dần
    function compare(a, b) {
        return a - b;
}
document.getElementById('arrayAfterSort').innerHTML = listNum
}

/* Câu 8 */
    /*Tạo hàm kiểm tra số nguyên tố trong JavaScript*/
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
function isPrime(n){
    var flag = 1;
        if (n < 2){
            return flag = 0
        }else if (n === 2){ 
            return flag = 1
        }else{
            var j = 2;
            while (j < n){
                if( n % j == 0 ) {
                   flag = 0;
                    break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
                }
                j++;
            }
        }
        return flag;
}   

function findFirstPrime(){
    //gán cho một biến tạm thời là -1
    var firstPrime = -1
    //tạo vòng lặp cho chạy lần lượt từ vị trí đầu tiên -> cuối mảng listNum
    //Gọi hàm isPrime và truyền tham số là giá trị listNum thứ i
    for (var i = 0; i < listNum.length; i++){
        if (isPrime(listNum[i]) === 1){
            firstPrime = listNum[i]
            break /*tìm được số nguyên tố đầu tiên là thoát vòng lặp*/
        }
    }
    document.getElementById('showFirstPrime').innerHTML = (`${firstPrime !== -1? firstPrime: 'Không có số nguyên tố nào trong mảng'}`)
}

/* Câu 9 */
//tạo thêm một mảng và thêm giá trị vào mảng như câu 1
var listNum9 = []
function addNum9(){
    var enterNum9 = +document.getElementById('enterNum9').value
    listNum9.push(enterNum9)
    document.getElementById('showList9').innerHTML = listNum9
}
function countInteger(){
    //tạo biến đếm số lượng số nguyên
    var countInteger = 0
    //tạo vòng lặp cho chạy lần lượt từ vị trí đầu tiên -> cuối mảng listNum
    //kiểm tra số thứ i có phải số nguyên không bằng cách:
    //nếu Number.isInteger là true thì tăng biến đếm lên 1
    for (var i = 0; i < listNum9.length; i++){
        if(Number.isInteger(listNum9[i])){
            countInteger +=1
        }
    }
    document.getElementById('countInteger').innerHTML = `Số lượng số nguyên là ${countInteger}`
}

/* Câu 10 */
function compareAmount(){
    //tạo biến đếm số lượng số dương và biến đếm số lượng số âm
    var countPos = 0
    var countNeg = 0
    //tạo vòng lặp cho chạy lần lượt từ vị trí đầu tiên -> cuối mảng listNum
    //Nếu số thứ i>0 thì tăng biến đếm số dương lên 1; nếu số thứ i<0 thì tăng biến đếm số âm lên 1
    for (var i = 0; i < listNum.length; i++){
        if (listNum[i] > 0){
            countPos +=1
        }
        if(listNum[i] < 0){
            countNeg +=1
        }
    }
    //kiểm tra các trường hợp và hiển thị
    if (countPos == countNeg){
        document.getElementById('compareAmount').innerHTML = 'Số lượng số dương' + ' = ' + 'Số lượng số âm'
    }
    if (countPos > countNeg){
        document.getElementById('compareAmount').innerHTML = 'Số lượng số dương' + ' > ' + 'Số lượng số âm'
    }
    if (countPos < countNeg) {
        document.getElementById('compareAmount').innerHTML = 'Số lượng số dương' + ' < ' + 'Số lượng số âm'
    }
}

















