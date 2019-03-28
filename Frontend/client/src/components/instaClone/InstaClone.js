import React, { Component } from "react";
import PostContainer from "./PostContainer";
import dummyData from "./dummy-data";
import SideNav from "../sidenav/sidenav";

import styled from "styled-components";

const InstaStyled = styled.div`
  .App {
    max-width: 570px;
    margin: 0 auto;
  }
`;

class InstaClone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: dummyData,
      userinput: ""
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  searchHandler = event => {
    event.preventDefault();
    if (event.keyCode === 13 && event.target.value.length > 0) {
      let newData = this.state.posts.filter(posts => {
        return posts.username === event.target.value;
      });
      this.setState({ posts: newData });
      event.target.value = "";
    }
  };

  render() {
    return (
      <InstaStyled>
        <div>
          <SideNav />
        </div>
        <div className="App">
          {this.state.posts.map(post => {
            return (
              <PostContainer
                post={post}
                key={post.timestamp}
                addLike={this.addLike}
              />
            );
          })}
        </div>
      </InstaStyled>
    );
  }
}

export default InstaClone;
