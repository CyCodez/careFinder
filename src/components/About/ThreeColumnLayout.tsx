import React from "react";
import { FaStar } from "react-icons/fa";

interface AvatarCardProps {
  name: string;
  comment: string;
  avatarUrl: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  name,
  comment,
  avatarUrl,
}) => {
  return (
    <div className="avatar-card">
      <div className="comment">{comment}</div>
      <FaStar className="star-Icon" />
      <FaStar className="star-Icon" />
      <FaStar className="star-Icon" />
      <FaStar className="star-Icon" />
      <FaStar className="star-Icon" />
      <div className="avatar-wrapper">
        <img src={avatarUrl} alt="User Avatar" className="avatar-image" />
        <span className="avatar-name">{name}</span>
      </div>
    </div>
  );
};

const ThreeColumnLayout: React.FC = () => {
  const users = [
    {
      name: "Sarah Larry",
      comment:
        "I had an amazing experience with Care Finder! The platform was easy to use, and I found the perfect healthcare provider in no time. Highly recommended!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2ZeZRx4E35tlqZ9BBwEHpjUqQXn8Mg-0kw&usqp=CAU",
    },
    {
      name: "Cynthia Smith",
      comment:
        "Care Finder is a game-changer! I was able to quickly locate top-notch healthcare services in my area. The detailed information and user reviews helped me make an informed decision. Thank you, Care Finder!",
      avatarUrl:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Jennifer George",
      comment:
        "I cannot express how grateful I am for Care Finder. It made finding a healthcare provider effortless. The platform is user-friendly, and the search results were tailored to my specific needs. 5 stars all the way!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJHCL_yK3TBs03Wq1hdJxEAebTA9EXfEPhg&usqp=CAU",
    },
  ];

  return (
    <div className="three-column-layout">
      {users.map((user, index) => (
        <AvatarCard
          key={index}
          name={user.name}
          comment={user.comment}
          avatarUrl={user.avatarUrl}
        />
      ))}
    </div>
  );
};

export default ThreeColumnLayout;
