import React, { useState } from 'react';
import { Btn } from '../styled-components';

export default function ActivityForm({
  postActivityHandler,
  formActive,
  setFormActive,
}) {
  // on form submit handler
  const onFormSubmit = () => {
    setFormActive(false);
  };

  return (
    <div onClick={onFormSubmit} className='form-activity'>
      {formActive ? (
        <>
          <div className='backdrop'></div>
          <form onSubmit={onFormSubmit}>
            <div className='form-wrapper'>
              <div>
                <h1>Post Your Activity During Saving The Nature!</h1>
                <p>
                  This information will be displyaed publicly, share your best
                  photograph with awesome caption!
                </p>
              </div>
              <div className='column dropzone'>
                <label>UPLOAD YOUR ACTIVITY PHOTO</label>
                <input type='file' placeholder='Drop your images' />
              </div>
              <div className='column storyzone'>
                <label>TELL US YOUR STORY!</label>
                <input type='text' placeholder='Naturify was amazing!' />
                <caption>
                  This caption will be shown on the post section
                </caption>
              </div>

              <p>
                We trust you that you have really help #ProtectTheNature clean
                up in the nature!
              </p>
              <Btn>Post Activity</Btn>
            </div>
          </form>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
