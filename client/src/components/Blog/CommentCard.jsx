import React from 'react'

const CommentCard = ({comments}) => {
  return comments?.length == 0 ? "No Comments Yet" : 
  
    comments?.map(curele => (<div className="user-comment background" key={curele._id}>
          <div className="user-profile">
            <img
              src={curele.user.avatar}
              alt=""
              id="profile-img"
            />
            <div className="user-description">
              <span>{curele.user.name}</span>
              <span>{curele.user.email}</span>
            </div>
          </div>
          <div className="description">
            <p>
              {curele.comment}
            </p>
          </div>
        </div>))
  
}

export default CommentCard