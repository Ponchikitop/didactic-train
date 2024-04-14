const a = parseInt(prompt("Введите коэффициент a:"));
const b = parseInt(prompt("Введите коэффициент b:"));
const c = parseInt(prompt("Введите коэффициент c:"));
const d = b**2 - 4 * a * c;
if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("Уравнение имеет 2 корня:");
    console.log("x1 =", x1);
    console.log("x2 =", x2);
}
else if (d === 0) {
    const x = -b / (2 * a);
    console.log("Уравнение имеет один корень:");
    console.log("x =", x);
 }
else {
    console.log("Уравнение не имеет корней");
}