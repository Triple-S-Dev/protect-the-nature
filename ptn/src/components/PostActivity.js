import React from 'react';
import {
  FlexPost,
  Text,
  ActivityImage,
  ActivityUser,
  Avatar,
} from '../styled-components';

export default function PostActivity({ userEmail, story, images }) {
  return (
    <div>
      <FlexPost>
        <div>
          <Avatar>{userEmail.charAt(0)}</Avatar>
        </div>
        <div>
          <ActivityUser>{userEmail}</ActivityUser>
          <Text className='mt-4'>{story}</Text>
          <ActivityImage className='mt-16' src={images} alt={story} />
        </div>
      </FlexPost>
    </div>
  );
}
