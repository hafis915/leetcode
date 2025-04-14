function countStudents(students: number[], sandwiches: number[]) {
    let total_student = students.length;
    const total_sandwhiches = sandwiches.length;
    const students_mapping = {}
    for (let i = 0 ; i < total_student; i++) {
        const student = students[i]
        if (students_mapping[student]) {
            students_mapping[student]++
        } else {
            students_mapping[student] = 1
        }
    }

    for (let s = 0 ; s < total_sandwhiches; s++) {
        const type_of_sandwich = sandwiches[s]
        if (students_mapping[type_of_sandwich]) {
            students_mapping[type_of_sandwich]--
            total_student--
        } else {
            console.log(total_student, "<<< total")
            return total_student
        }
    }

    console.log(total_student, "<<< total")

    return total_student
}
