const Post = {
    author(parent,args,ctx,info){
        return ctx.db.usersObj.find((eachUser)=>{
            return eachUser.id == parent.author
        })
    },
    comments(parent){
        return ctx.db.commentObj.filter((eachComment)=>{
            return eachComment.post == parent.id
        })
    }
}
export {Post as default}