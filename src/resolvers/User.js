const User = {
    posts(parent,args,ctx,info){
        return ctx.db.postObj.filter((eachPost)=>{
            return eachPost.author == parent.id
        })
    }
}
export {User as default}