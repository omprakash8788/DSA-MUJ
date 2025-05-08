/*
 Restaurant Reviews

 A restaurant listing website has asked you to analyse the reviews on its restaurants.
The reviews need to be sorted by how good they are, the best reviews go on top. The goodness a review is determined by the number of times "good words" appear in them. You are given a list of good words.

Given n reviews and m good words, sort the reviews, such that the one with most good words appears first. For reviews with the same number of good words, maintain the initial order.

Output format
The output has n lines, each containing a review. The reviews are sorted as required.

Sample Input
3 4
good restaurant
tasty food nice ambience
nice place
good lovely nice tasty

Expected Output
tasty food nice ambience
good restaurant
nice place

*/
function sortReviews(reviews, goodWords) {
    // Convert good words into a Set for fast lookup
    const goodSet = new Set(goodWords);
  
    // Map each review to an object with count and original index
    const reviewWithCount = reviews.map((review, index) => {
      const words = review.split(" ");
      let count = 0;
  
      for (let word of words) {
        if (goodSet.has(word)) count++;
      }
  
      return { review, count, index }; // store original index
    });
  
    // Sort based on count (descending), then by original index (ascending)
    reviewWithCount.sort((a, b) => {
      if (b.count === a.count) return a.index - b.index; // preserve original order
      return b.count - a.count; // higher count first
    });
  
    // Extract just the reviews
    return reviewWithCount.map(r => r.review);
  }
  
  // Example Usage:
  const reviews = [
    "good restaurant",
    "tasty food nice ambience",
    "nice place"
  ];
  
  const goodWords = ["good", "lovely", "nice", "tasty"];
  
  const result = sortReviews(reviews, goodWords);
  console.log(result.join("\n"));
  