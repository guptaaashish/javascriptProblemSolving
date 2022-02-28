//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function getArea(s1,s2,s3){
    const s = (s1+s2+s3)/2;
    const area =  Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)));
    return area;
}
const area = getArea(5,6,7);
console.log(area);