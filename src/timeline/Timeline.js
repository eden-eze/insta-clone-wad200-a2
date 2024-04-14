import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./Post/Post";

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "heatheneden_",
            postImage: "https://images.unsplash.com/photo-1683660108214-147c23fe909d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 43,
            timestamp: "1d",
        },
        {
            user: "banditdesigngroup",
            postImage: "https://images.unsplash.com/photo-1619535541864-9e1b0899957b?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 345,
            timestamp: "5h",
        },
        {
            user: "freepalestine",
            postImage: "https://images.unsplash.com/photo-1697911340172-4b167da63969?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 1700890,
            timestamp: "2d",
        },
        {
            user: "cabinlifeforme",
            postImage: "https://images.unsplash.com/photo-1525113990976-399835c43838?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 180,
            timestamp: "12h",
        },
        {
            user: "Ancagabbi",
            postImage: "https://images.unsplash.com/photo-1585327969772-17d7940f1a21?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 267,
            timestamp: "2h",
        },
        {
            user: "DimaKap",
            postImage: "https://images.unsplash.com/photo-1712174426543-eb917dbd7e5d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 68,
            timestamp: "10m",
        },
        {
            user: "mathis_01",
            postImage: "https://images.unsplash.com/photo-1712939706455-aa727970e5d5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 48,
            timestamp: "20m",
        },
        {
            user: "Jahanzebaa",
            postImage: "https://images.unsplash.com/photo-1711305878120-347de280fe89?q=80&w=1556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 380,
            timestamp: "2d",
        },
    ]);
  return (
    <div className="timeline">
        <div className="timeline__left">
            <div className="timeline__posts">
                {posts.map((post) => (
                    <Post 
                    user={post.user} 
                    postImage={post.postImage}
                    likes={post.likes} 
                    timestamp={post.timestamp}
                    />
                ))}
                

            </div>
        </div>
        <div className="timeline__right">
            <Suggestions />
        </div>

    </div>
  );
}

export default Timeline
