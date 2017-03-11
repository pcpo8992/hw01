function launch() {
    var M = 2016;
    var N = 1911;
    var num = Math.ceil(Math.random() * (M - N) + N);
    d3.select(".HW1-5")
        .text(num.toString());
    console.log(M, N);
}
