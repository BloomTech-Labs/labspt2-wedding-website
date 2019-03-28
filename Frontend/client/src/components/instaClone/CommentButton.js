import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const CommentButton = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faComments} />
    </div>
  );
};

export default CommentButton;
