var sum = 0;
for (i = 2; i < process.argv.length; i++) {
    var num = Number(process.argv[i]);
    sum = sum + num;
}
console.log(sum);
