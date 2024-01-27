///////////////////////////////////////////////////////////////////////////
// To do:

/* 
    Write to do here
*/

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// Import libraries and external files here
import React, { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_USER, QUERY_SINGLE_POST } from "../utils/queries"

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// Rename the component function with your new component actual name

const PostCard = ({post, handlePageChange, userData}) => {
    ///////////////////////////////////////////////////////////////////////////
    // States section
    const [postAuthorData, setPostAuthorData] = useState(null);
    const [ error, setError ] = useState('');


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    // Define queries and mutations here///////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    // Queries
    const {loading: postAuthorLoading, error: postAuthorError} = useQuery(QUERY_USER,{
        variables: {userId: post.author},
        onCompleted: (data) => setPostAuthorData(data)
    });

    ///////////////////////////////////////////////////////////////////////////
    // Mutations


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    // Create your if statements to handle errors and loading from graphQl here


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    // Define any other variables here


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    // testing area. Console.log away, kid...


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    
    return (
        <div className="row border-top border-secondary p-2" >                                
            <h5 className="col-10 cursor-pointer"><a onClick={()=>handlePageChange('Pseudocode', post)}  >{post.title}</a></h5>
            <p className="col-10 cursor-pointer"><a onClick={()=>handlePageChange('Pseudocode', post)} >{`${post.content.substring(0, 200)}${post.content.length > 200 ? '...' : ''}`}</a></p>
            <div className="text-secondary">{
                userData && userData.users.map((user)=>{
                    if(user._id === post.author){
                        return <span key={user._id}>{user.name} at </span>
                    }
                })
                }{post.createdAt}</div>
                <div className="badge text-bg-dark p-2 ms-2 mt-1 col-auto">
                    <span>{post.comments.length}</span>
                    {post.comments.length == 1 && (<span> comment</span>)}
                    {post.comments.length > 1 && (<span> comments</span>)}
                </div>
        </div>
    )
}

export default PostCard;