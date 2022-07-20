import React, { useContext, useState } from 'react';
import { updateUserProfile } from '../../store/actions/auth';
import { context } from '../../store/store';
import sty from './EditProfile.module.css';

const EditProfile = ({ setEditOn, data }) => {
  const [imageUrl, setImageUrl] = useState(
    data.profileUrl ? data.profileUrl : ''
  );
  const [name, setName] = useState(data.name ? data.name : '');
  const [designation, setDesignation] = useState(
    data.designation ? data.designation : ''
  );
  const [dateOfBirth, setDateOfBirth] = useState(data.dob ? data.dob : '');
  const [bio, setBio] = useState(data.bio ? data.bio : '');
  const [gender, setGender] = useState(data.gender ? data.gender : '');
  const { authDispatch: dispatch, authState: state } = useContext(context);

  console.log(data);
  const onSumbitSave = () => {
    updateUserProfile({
      uid: data.uid,
      name,
      designation,
      bio,
      email: data.email,
      gender,
      dob: dateOfBirth,
      profileUrl: imageUrl,
    })(dispatch);
    setEditOn(false);
  };

  return (
    <div className={sty.modal}>
      <div className={sty.edit}>
        <label className={sty.editLabel}>Profile Details</label>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Profile Image</label>
          <input
            placeholder="Profile Image"
            className={sty.editInput}
            type="file"
            name="Profile Picture"
            onChange={event => {
              setImageUrl(event.target.files[0]);
            }}
          />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Name</label>
          <input
            placeholder="Display Name"
            className={sty.editInput}
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Date of Birth</label>
          <input
            placeholder="Email Address"
            type={'date'}
            className={sty.editInput}
            value={dateOfBirth}
            onChange={event => setDateOfBirth(event.target.value)}
          />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Bio</label>
          <input
            placeholder="About Yourself"
            className={sty.editInput}
            value={bio}
            onChange={event => setBio(event.target.value)}
          />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Designation</label>
          <input
            placeholder="Designation (Ex:Student, Web Developer)"
            className={sty.editInput}
            value={designation}
            onChange={event => setDesignation(event.target.value)}
          />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Email Address</label>
          <input
            placeholder="Email Address"
            disabled
            className={sty.editInput}
            value={data.email}
          />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Gender</label>
          <label
            className={`${sty.editLabel} ${sty.option} ${
              gender == 'male' && sty.active
            }`}
            onClick={() => setGender('male')}
          >
            Male
          </label>
          <label
            className={`${sty.editLabel} ${sty.option} ${
              gender == 'female' && sty.active
            }`}
            onClick={() => setGender('female')}
          >
            Female
          </label>
        </div>
        <div className={sty.editButtons}>
          <button onClick={() => onSumbitSave()}>Save Changes</button>
          <button className={sty.close} onClick={() => setEditOn(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
