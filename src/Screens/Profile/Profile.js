import React, { useState } from 'react';
import EditProfile from '../../components/EditProfile/EditProfile';
import sty from './Profile.module.css';

const Profile = () => {
  const [editOn, setEditOn] = useState(false);
  const [userName, setUserName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [bio, setBio] = useState('');
  return (
    <div className={sty.profile}>
      {editOn && <EditProfile setEditOn={setEditOn} />}
      <div className={sty.profileBox}>
        <div className={sty.details}>
          <div className={sty.image}>
            <img
              src={
                'https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
              }
              className={sty.img}
            />
          </div>
          <h3>Ritul Daryan</h3>
          <h4>daryanritul@gmail.com</h4>
          <p>
            <span>Bio : </span>
            Dolore esse et adipisicing est tempor non incididunt mollit.Dolore
            esse et adipisicing est tempor non incididunt mollit.
          </p>
          <button onClick={() => setEditOn(!editOn)}>Edit Profile</button>
        </div>
        <div className={sty.data}>
          <div className={sty.miniData}>Basic Info</div>
          <div className={sty.bigData}>NoteBooks</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
