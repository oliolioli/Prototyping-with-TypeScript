export class Course{

    ects: number;
    semester: string;
    name: string;

    constructor(name, ects, semester){
        this.name = name;
        this.ects = ects;
        this.semester = semester;
    }
    

}