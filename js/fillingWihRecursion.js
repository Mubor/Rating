function fill(i) {
    if(i<data.length) {
        insertData(data[i],"rating-recursion");
        fill(i+1);
    }
}

fill(0);