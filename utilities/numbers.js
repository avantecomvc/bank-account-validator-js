function tab(num, len){
    let s = num.toString();
    while (s.length < len){
        s = "0"+s
    }
    return s;
}

module.exports = {
    tab: tab
};