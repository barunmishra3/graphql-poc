const Subscription = {
    
    AddComment:{
        subscribe(parent,{postId},{ db,pubsub },info){
            const post = db.postObj.find((post)=>post.id == postId);
            if(!post){
                throw new Error("Post not found")
            }

            return pubsub.asyncIterator(`comment-added-${postId}`)
        }
    },
    AddPost:{
        subscribe(parent,{userId},{ db,pubsub },info){
            const user = db.usersObj.find((eachUser)=>eachUser.id == userId)
            if(!user){
                throw new Error("User not registered yet....")
            }
            return pubsub.asyncIterator(`post-added-${userId}`)
        }
    }
    // Post:{
    //     postAdded(parent,{authorId},{db,pubsub},info){
    //         const author = db.userObj.find((eachUser)=>eachUser.id == authorId);
    //         if(!author){
    //             throw new Error("User not found")
    //         }
    //         return pubsub.asyncIterator(`post-added-${authorId}`)
    //     }
    // }
}


export {Subscription as default}