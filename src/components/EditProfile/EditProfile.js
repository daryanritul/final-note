import React from 'react';
import sty from './EditProfile.module.css';

const EditProfile = ({ setEditOn }) => {
  return (
    <div className={sty.modal}>
      <div className={sty.edit}>
        <label className={sty.editLabel}>Profile Details</label>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Name</label>
          <input placeholder="Display Name" className={sty.editInput} />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Date of Birth</label>
          <input
            placeholder="Email Address"
            type={'date'}
            className={sty.editInput}
          />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Bio</label>
          <input placeholder="About Yourself" className={sty.editInput} />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Designation</label>
          <input
            placeholder="Designation (Ex:Student, Web Developer)"
            className={sty.editInput}
          />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Email Address</label>
          <input
            placeholder="Email Address"
            disabled
            className={sty.editInput}
          />
        </div>
        <div className={sty.editBox}>
          <label className={sty.editLabel}>Gender</label>
          <label className={`${sty.editLabel} ${sty.option} ${sty.active}`}>
            Male
          </label>
          <label className={`${sty.editLabel} ${sty.option}`}>Female</label>
        </div>
        <div className={sty.editButtons}>
          <button onClick={() => setEditOn(false)}>Save Changes</button>
          <button className={sty.close} onClick={() => setEditOn(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
