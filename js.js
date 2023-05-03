// var a=prompt('enter number')
// document.write(a*a*a)

// if(a%2==0){
//     document.write('even')
// }
// else{
//     document.write('odd')
// }

// if(a>0){
//     document.write('positive')
// }
// else if(a==0){
//     document.write('zero')
// }
// else{
//         document.write('negative')
//     }

// function a(){
//     var v1=+prompt('enter 1st number')
//     var v2=+prompt('enter 2nd number')
//     if(v1==10 || v2+v1==10 || v2==10){
//         document.write(true)
//     }
//     else{
//         document.write(false)
//     }
// }
// a();



// var bal=10000

// while(true){
//     var input=+prompt('enter your number 1:balance Check 2: Withdrawl 3:Deposit 4:Exit ')
//     if(input==1){
//         alert("Your Balance is: " +bal)
//     }
//     else if(input==2){
//        var w= +prompt('enter amount to withdraw')
//        if(w>bal){
//         alert("Your Balance is not enough to withdraw: ")
//        }
//        else{
//         bal=bal-w
//        alert('You withdraw '+w+' Your new balance is '+ bal)
//        }
//     }
//     else if(input==3){
//         var d= +prompt('enter amount to deposit')
//       bal=bal+d
//          alert("Your new Balance is  "+ bal)
//      }
//      else{
//         break
//      }


// }


// var a=10
// var b=20
// document.write("value of a is "+a+"<br>")

// document.write("value of b is "+b+"<br>"+"<br>"+"<br>")

// a=a+b//30
// b=a-b//10
// a=a-b//20


// document.write("value of a is "+a+"<br>")

// document.write("value of b is "+b)

// var a = 0
// var b = 1
// var fib

// document.write(a+'<br>')
// document.write(b+'<br>')
// for(var i=3;i<=10;i++){
    
//     fib=a+b
//     document.write(fib+'<br>')
//     a=b
//     b=fib
// }

// var a = "5+8+5-6*3+5"
// var b = "3"
// var c = +a + +b
// document.write(eval(a))

function a(){

    var a = document.getElementById('name').value
    document.getElementById('dis').innerHTML = a


}
