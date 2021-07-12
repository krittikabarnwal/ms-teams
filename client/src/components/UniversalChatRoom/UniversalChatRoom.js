import React, { useRef, useState } from "react";
import "./UniversalChatRoomStyle.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyALVd_8BiA1QxnpHLmJfsNTSEi1u4xrC6Y",
  authDomain: "teams-clone-chatroom.firebaseapp.com",
  projectId: "teams-clone-chatroom",
  storageBucket: "teams-clone-chatroom.appspot.com",
  messagingSenderId: "160654164273",
  appId: "1:160654164273:web:2ad6bac71a11ca865a7010",
  measurementId: "G-5QWRPGMQKE",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function UniversalChatRoom() {
  const [user] = useAuthState(auth);

  return (
    <div className="universal-chat">
      <header>
        <div>Chatroom</div>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in button-univ" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out button-univ" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="mainblock">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form className="uni-form" onSubmit={sendMessage}>
        <input
          className="input-chat"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button
          className="button-univ univsendbutton "
          type="submit"
          disabled={!formValue}
        >
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className="imgofperson"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p className="para">{text}</p>
      </div>
    </>
  );
}

export default UniversalChatRoom;
