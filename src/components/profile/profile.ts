export class Profile {
    name: string;
    email: string;
    birthday: string;
    phone: number;

    constructor(name, email, birthday, phone){
        this.birthday = birthday;
        this.name = name;
        this.email = email;
        this.phone = phone;

    }

    courses = [
        {course: "Mathematics", grade: "5"},
        {course: "Statistics", grade: "4.5"},
        {course: "Biology", grade: "4"},
        {course: "Information Systems", grade: "4.5"}

    ]

    creditsCompleted: number = 120;
    studyYear: string = "Third year";

    notifications = [
        { message: "Your course enrollment request has been approved", date: "16/12/2024" },
        { message: "You have one new message", date: "15/12/2024" },
    ];
  }