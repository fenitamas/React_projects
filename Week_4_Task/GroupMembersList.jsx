
import React from 'react';

const GroupMembersList = () => {

  const members = [
    "HIlina Fiseha",
    "Hiwot Tadesse Aytenfisu",
    "Ililli Juhar Ahmed",
    "Kaku Temesgen",
    "Kenean Biru Balcha",
    "Kenean Yilma",
    "Khewlet mohammed",
    "Kidus Asebe",
    "Kirubel Legese Habtu",
    "leul abera",
    "Lemesa Elias",
    "Desalegn Sendek"
  ];

  return (
    <div>
      <h2>React Group 11 Members:</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembersList;
