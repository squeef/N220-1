// Create the course object
const course = {
  courseNumber: "N220",
  courseTitle: "Introduction to Media Application Development",
  totalSeats: 20,
  enrolled: 18,

  // Method to calculate availability
  availability: function () {
    return this.enrolled < this.totalSeats;
  },

  // Method to print availability status to console
  printAvailability: function () {
    console.log(`${this.courseNumber} Open: ${this.availability()}`);
  },

  // Method to enroll additional students
  enrollStudents: function (number) {
    this.enrolled += number;
    console.log(`Enrolled Students: ${this.enrolled}`);
  },
};

// Execute when the window loads
window.onload = function () {
  // Print initial availability
  course.printAvailability(); // Output: N220 Open: true

  // Enroll two more students
  course.enrollStudents(2); // Output: Enrolled Students: 20

  // Print availability again
  course.printAvailability(); // Output: N220 Open: false
};
