{/* <div class="container">
<span class="main">
    10
</span>
</div> */}

var num = 10;

var div = document.createElement('div')
var span = document.createElement('span');
div.setAttribute('class', 'container')
span.setAttribute('class', 'main')
span.innerHTML = num;

// var span = document.querySelector('.main');

    setTimeout(() => {
        num = num-1
        span.innerHTML = num;
        setTimeout(() => {
            num = num-1
            span.innerHTML = num;
            setTimeout(() => {
                num = num-1
                span.innerHTML = num;
                setTimeout(() => {
                    num = num-1
                    span.innerHTML = num;
                    setTimeout(() => {
                        num = num-1
                        span.innerHTML = num;
                        setTimeout(() => {
                            num = num-1
                            span.innerHTML = num;
                            setTimeout(() => {
                                num = num-1
                                span.innerHTML = num;
                                setTimeout(() => {
                                    num = num-1
                                    span.innerHTML = num;
                                    setTimeout(() => {
                                        num = num-1
                                        span.innerHTML = num;
                                        setTimeout(() => {
                                            num = num-1
                                            span.innerHTML = num;
                                            setTimeout(() => {
                                                span.innerHTML = "Happy Independece Day!!!";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);


    div.append(span);
    document.body.append(div);
        


//    let num = 10;

//    var murad = setInterval(() => {
//     if(num>0){
        
//         console.log(num);
//         num = num-1;
//     } else {
//         clearInterval(murad)
//         console.log("Happy Independece Day!!!");

//     }
    
//    }, 1000);