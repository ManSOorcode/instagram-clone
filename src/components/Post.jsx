import React from "react";

import like from "../assets/heart-svgrepo-com.svg";
import comment from "../assets/comment-svgrepo-com.svg";
import share from "../assets/share-svgrepo-com.svg";
import bookmark from "../assets/bookmark-svgrepo-com.svg";

const Post = () => {
  return (
    <div className="border-b-2 border-slate-400">
      <div className="flex items-center my-2">
        {/* <div className="w-6 sm:w-12"> */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyy_RfvRHOK1wVbdndqsz8-omZzbcmjcu9aw&usqp=CAU"
          alt="profile-icon"
          className=" rounded-full object-contain w-6 sm:w-12"
        />
        {/* </div> */}
        <h3 className="ml-2 mb-2 ">person two</h3>
      </div>
      <div className="grid justify-center w-full">
        <img
          //   src="data:image/png;base64,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"
          src="https://blog.hubspot.com/hs-fs/hubfs/how-to-post-on-instagram_1.webp?width=350&height=757&name=how-to-post-on-instagram_1.webp"
          alt="post-image"
          className="rounded-md border border-cyan-700  object-contain"
        />
        <div className="my-4 flex justify-between">
          <div className="flex justify-between basis-20 lg:basis-40">
            <p className="">
              <img src={like} alt="like-icon" className="w-6 md:w-8" />
            </p>
            <p className="">
              <img src={comment} alt="comment-icon" className="w-6 md:w-8 " />
            </p>
            <p className="">
              <img src={share} alt="share-icon" className="w-6 md:w-8" />
            </p>
          </div>

          <p className="">
            <img src={bookmark} alt="bookmark-icon" className="w-6 md:w-8 " />
          </p>
        </div>
        <div>2,399 likes</div>
        <h4 className="mb-4">person2 with description</h4>
      </div>
    </div>
  );
};

export default Post;
