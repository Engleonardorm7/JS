class LearningPath{
    constructor({
        name,
        courses=[],
    }){
        this.name=name;
        this.courses=courses;
    }
}
const escuelaWeb=new LearningPath({
    name:"Escuela de desarrollo Web",
    courses:["react"]
})
const escueladata=new LearningPath({
    name:"Escuela de data science",
    courses:["react"]
})

class Student{
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        intagram,
        facebook=undefined,
        approvedCourses=[],
        learningPaths=[],
        
    })
    {
        this.name=name;
        this.email= email;
        this.username= username;
        this.socialMedia={
            twitter,
            intagram,
            intagram,
        }
    
        this.approvedCourses= approvedCourses;
        this.learningPaths= learningPaths;
    }
}

const Leo=new Student({
    name:"Leonardo",
    username:"Leonardo",
    email:"leonardorm7",
    twitter:"Leonardo",
    learningPaths:[
        escuelaWeb,
        escueladata,
    ]
});
const juan=new Student({
    name:"Juan",
    username:"Juanito",
    email:"leonardorm7",
    facebook:"Juan",
});