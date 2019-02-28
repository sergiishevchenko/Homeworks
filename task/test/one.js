// var n = 123;
// typeof(n);
// console.log(n);

// var str = "Мама мыла раму";
// typeof(str);
// console.log(str);

// var checked = true;
// typeof(checked);
// console.log(checked);

// var age = null;
// typeof(age);
// console.log(age);

// var x;
// typeof(x);
// console.log(x);

// var user = { name: "Вася" };
// typeof(user);
// console.log(user);

var width = 1;
var height = 2;

function blockSum () {
    for (let i = 0; i < 10; i++) {
        width = width + 10;
        var summ = width*height;
        console.log(summ);
    }
}

blockSum();

