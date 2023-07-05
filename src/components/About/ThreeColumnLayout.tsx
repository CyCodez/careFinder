import React from "react";

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
      <div className="avatar-wrapper">
        <img src={avatarUrl} alt="User Avatar" className="avatar-image" />
        <span className="avatar-name">{name}</span>
      </div>
      <div className="comment">{comment}</div>
    </div>
  );
};

const ThreeColumnLayout: React.FC = () => {
  const users = [
    {
      name: "John Doe",
      comment: "Great experience with CareFinder!",
      avatarUrl: "https://example.com/avatar1.jpg",
    },
    {
      name: "Jane Smith",
      comment: "Highly recommend this service!",
      avatarUrl: "https://example.com/avatar2.jpg",
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
