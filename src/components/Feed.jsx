import React, { useState, useEffect } from "react";
import "../components/Feed.css";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { db } from "./Firebase";
import { collection, onSnapshot, addDoc,Timestamp, orderBy , query } from "firebase/firestore";


function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);
  

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        name: "Adnan Hamid Wani",
        description: "Developer",
        message: input,
        photoUrl: "",
        timestamp: Timestamp.now(), // Firebase Timestamp to get the current server time

      });
      setInput(""); // Clear input field after submission
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateSharpIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button type="submit" onClick={sendPost}>
              Create
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Media" color="#70B5F9" />
          <InputOption
            Icon={CalendarMonthOutlinedIcon}
            title="Event"
            color="brown"
          />
          <InputOption
            Icon={ArticleIcon}
            title="Write Article"
            color="orange"
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl, timestamp } }) => (
  <Post
    key={id}
    name={name}
    description={description}
    message={message}
    photoUrl={photoUrl}
    timestamp={timestamp?.toDate().toLocaleString()} // Convert Firestore timestamp to a human-readable date
  />
))}

    </div>
  );
}

export default Feed;
