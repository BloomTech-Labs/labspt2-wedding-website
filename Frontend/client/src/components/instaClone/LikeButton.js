import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styled from "styled-components";

const LikeIcon = styled.img`
  height: 25px;
`;

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    return (
      <button onClick={this.props.addLike}>
        <FontAwesomeIcon icon={faHeart} />
      </button>
    );
  }
}

export default LikeButton;
