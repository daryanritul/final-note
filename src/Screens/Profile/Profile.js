import React, { useContext, useState } from 'react';
import EditProfile from '../../components/EditProfile/EditProfile';
import { authSignOut } from '../../store/actions/auth';
import { context } from '../../store/store';
import sty from './Profile.module.css';

const Profile = () => {
  const [editOn, setEditOn] = useState(false);
  const { authDispatch: dispatch, authState: state } = useContext(context);
  return (
    <div className={sty.profile}>
      {editOn && <EditProfile setEditOn={setEditOn} data={state.data} />}
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
          <h3>{state.data.name}</h3>
          <h4>{state.data.email}</h4>
          <p>{state.data.designation}</p>
          <p>
            <span>Bio : </span>
            {state.data.bio}
          </p>
          <p>Date of Birth : {state.data.dob}</p>
          <button onClick={() => setEditOn(!editOn)}>Edit Profile</button>
          <button
            className={sty.danger}
            onClick={() => authSignOut()(dispatch)}
          >
            Sign Out
          </button>
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
