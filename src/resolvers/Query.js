const Query =  {
    add(parent,args){
        return args.number1 + args.number2
    },
    greeting(parent,args,ctx,info){
        if(args.name){
            return `hello ${args.name}`
        }else{
            return "hello"
        }
       
    },
    post(parent,args,{db},info) {
       if(!args.query){
            return db.postObj
       }else{
           return db.postObj.filter((eachPost)=>{
               return eachPost.title.toLowerCase().includes(args.query.toLowerCase())
           })
       }
    },
    comments(parent,args,ctx,info){
        return commentObj;
    },
    user(parent,args,ctx,info){
        if(!args.query){
            return ctx.db.usersObj
        }else{
            return  ctx.db.usersObj.filter((eachUser)=>{
                console.log(args.query)
                return eachUser.name.toLowerCase().includes(args.query.toLowerCase())
            })
        }
      
    }
}

export {Query as default}   