import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";

import "./View.css";
function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  async function fetchData(postDetails) {
    const { userId } = postDetails;
    const res = await firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get();
    res.forEach((doc) => {
      setUserDetails(doc.data());
    });
  }
  useEffect(() => {
    console.log({postDetails})
    if (postDetails) {
      fetchData(postDetails);
    }
  }, [postDetails]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails?.image} alt="" />
      </div>
      <div className="rightSection">
        {postDetails && (
          <div className="productDetails">
            <p>&#x20B9; {postDetails?.price} </p>
            <span>{postDetails?.name}</span>
            <p>{postDetails?.category}</p>
            <span>{postDetails?.createdAt}</span>
          </div>
        )}
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails?.username}</p>
            <p>{userDetails?.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
