let usersObj = [
    {
        id : 1,
        name: 'barun',
        email: 'barun.mishra@kare4u.in',
        age: 4
    },
    {
        id : 2,
        name: 'milan',
        email: 'barunmishra3@gmail.com',
        age: 4
    },
    {
        id : 3,
        name: 'pratik',
        email: 'nunics@gmail.com',
       
    }
]
let postObj = [
    {
        id: 1,
        title: "graphQL101",
        body: "1st post",
        published:false,
        author: "1"
    },
    {
        id: 2,
        title: "graphQL201",
        body: "2nd post",
        published:false,
        author: "1"
    },
    {
        id: 3,
        title: "graphQL301",
        body: "3rd post",
        published:false,
        author: "3"
    },
    {
        id: 4, 
        title: "graphQL401",
        body: "4th post",
        published:true,
        author: "2"
    }
]
let commentObj = [
    {
        id:1,
        text:"this is 1",
        author:1,
        post:1
    },
    {
        id:2,
        text:"this is 2",
        author:1,
        post:1
    },
    {
        id:3,
        text:"this is 3",
        author:2,
        post:4
    },
    {
        id:3,
        text:"this is 4",
        author:1,
        post:2
    }
]

let  db = {
    usersObj,
    postObj,
    commentObj
}
export {db as default}