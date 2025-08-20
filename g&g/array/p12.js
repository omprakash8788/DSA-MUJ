// Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

let intervals = [[1,3],[2,6],[8,10],[15,18]];
 if (intervals.length === 0) return [];

    // Step 1: Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]]; // put first interval in merged

    for (let i = 1; i < intervals.length; i++) {
        let last = merged[merged.length - 1];
        let current = intervals[i];

        if (current[0] <= last[1]) {
            // Overlapping → merge them
            last[1] = Math.max(last[1], current[1]);
        } else {
            // Non-overlapping → add to result
            merged.push(current);
        }
    }

    // return merged;
    console.log(merged)


/*
Interval kya hota hai?

Interval = [start, end]
मतलब ek range, jaise number line par ek tukda.
Example: [1,3] matlab 1 se 3 tak.


Overlap kab hoga?

Maan le do interval hain:

[a, b] aur [c, d]

Agar dusre ka start (c) pehle ke end (b) se chhota ya barabar hai (c ≤ b),
toh dono takra jaayenge (overlap hoga).


No Overlap kab hoga?

Agar dusre ka start (c) pehle ke end (b) se bada hai (c > b),
toh dono ke beech gap hoga → matlab ❌ no overlap.


Example 
[[1,3], [2,6], [8,10], [15,18]]

[1,3] aur [2,6]

yaha 2 ≤ 3 → overlap hai → merge ho ke [1,6] ban gaya.

[1,6] aur [8,10]

yaha 8 > 6 → gap hai → ❌ no overlap.

[8,10] aur [15,18]

yaha 15 > 10 → firse gap hai → ❌ no overlap.

*/