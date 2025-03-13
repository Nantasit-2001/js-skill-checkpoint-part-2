const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
console.log("Total score is " + students.filter(studen=>studen.score>50)
                                        .map(studen=>studen.score+(studen.score*0.1))
                                        .reduce((acc,value)=>value+acc))
