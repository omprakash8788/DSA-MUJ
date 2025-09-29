//  Largest Triangle Area

//  Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.


//  Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// Output: 2.00000
// Explanation: The five points are shown in the above figure. The red triangle is the largest.
// Example 2:

// Input: points = [[1,0],[0,0],[0,1]]
// Output: 0.50000

let points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
var largestTriangleArea = function(points) {
    let maxArea = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                let [x1, y1] = points[i];
                let [x2, y2] = points[j];
                let [x3, y3] = points[k];

                // shoelace formula
                let area = Math.abs(
                    x1 * (y2 - y3) +
                    x2 * (y3 - y1) +
                    x3 * (y1 - y2)
                ) / 2;

                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};
console.log(largestTriangleArea(points))