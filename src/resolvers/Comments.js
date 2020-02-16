const Comments = {
    post(parent,args,ctx,info){
        return ctx.db.postObj.find((eachPost)=>{
            return  eachPost.id == parent.post
        })
    },
    author(parent,args,ctx,info){
        return ctx.db.usersObj.find((eachUser)=>{
            return parent.author == eachUser.id
        })
    }
}  

export {Comments as default}