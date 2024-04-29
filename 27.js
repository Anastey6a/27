class Student {
  constructor(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.attendanceCount = 0;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    if (this.attendanceCount < 25) {
      this.attendance[this.attendanceCount] = true;
      this.attendanceCount++;
    } else {
      console.log("Максимальна кількість відвідувань досягнута.");
    }
  }

  absent() {
    if (this.attendanceCount < 25) {
      this.attendance[this.attendanceCount] = false;
      this.attendanceCount++;
    } else {
      console.log("Максимальна кількість відвідувань досягнута.");
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRatio = this.attendance.filter(Boolean).length / 25;

    if (averageGrade > 90 && attendanceRatio > 0.9) {
      return "Молодець!";
    } else if (averageGrade < 90 || attendanceRatio < 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Іван", "Петренко", 2000, [90, 85, 92, 88, 95]);
const student2 = new Student("Марія", "Кравчук", 2001, [75, 80, 82, 88, 90]);
const student3 = new Student("Петро", "Сидоренко", 1999, [60, 65, 70, 75, 80]);

student1.present();
student1.present();
student1.absent();
student2.present();
student2.absent();
student2.absent();
student3.present();
student3.present();
student3.present();


console.log(`Студент: ${student1.firstName} ${student1.lastName}, Вік: ${student1.getAge()}, Середній бал: ${student1.getAverageGrade()}`);
console.log(`Підсумок: ${student1.summary()}`);
console.log("---");

console.log(`Студент: ${student2.firstName} ${student2.lastName}, Вік: ${student2.getAge()}, Середній бал: ${student2.getAverageGrade()}`);
console.log(`Підсумок: ${student2.summary()}`);
console.log("---");

console.log(`Студент: ${student3.firstName} ${student3.lastName}, Вік: ${student3.getAge()}, Середній бал: ${student3.getAverageGrade()}`);
console.log(`Підсумок: ${student3.summary()}`);
