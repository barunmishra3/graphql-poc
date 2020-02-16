import uuidv4 from 'uuid/v4'
const Mutation = {
    createUser(parent,args,ctx,info){
        const isTakenEmail = ctx.db.usersObj.some((eachUser)=> eachUser.email === args.data.email);
        if(isTakenEmail){
            throw new Error("Email Already Taken.")
        }
        const user = {
            id : uuidv4(),
            ...args.data
        }
        ctx.db.usersObj.push(user)
        return user;
    },
    createPost(parent,args,{db,pubsub},info){
        const hasAuthor = db.usersObj.find((eachUser)=> eachUser.id == args.data.author)
        if(hasAuthor){
            const post = {
                id: uuidv4(),
                ...args.data
            }
            db.postObj.push(post);
            pubsub.publish(`post-added-${args.data.author}`,{
                AddPost:post
            })
            return post;
        }else{
            throw new Error("User not registered Yet...")
        }
        
    },
    addComment(parent,args,{db,pubsub},info){
        const hasAuthor = db.usersObj.some((eachUser)=>eachUser.id == args.data.author)
        const hasPost =   db.postObj.some((eachPost)=>eachPost.id == args.data.post)
        if(!hasAuthor) throw new Error("user not found...")
        if(!hasPost) throw new Error("post not found")
        const comment = {
            id:uuidv4(),
            ...args.data
        } 

        db.commentObj.push(comment)
        pubsub.publish(`comment-added-${args.data.post}`,{ AddComment:comment })
        return comment     
    }
}
export {Mutation as default}