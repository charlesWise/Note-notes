/*闭包*/
foo.addEventListener('click', (function() {
    var times = 0;
    return function() {
        times++
        console.log(times)
    }
})(), false)

/*String转化为Number*/
+'45'
+new Date