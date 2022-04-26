function degree(num,deg) {
    if (deg == 0){
        return 1;
    } else {
        return degree(num,deg-1) * num;
    }
}


let res = degree(2,5);
alert(res);

