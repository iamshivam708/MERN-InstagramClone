import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SuggestedUsers from "./User/SuggestedUsers";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: sessionStorage.getItem("email"),
      posts: [],
      comment: "",
    };
  }

  componentDidMount = () => {
    if (sessionStorage.getItem("loggedIn") !== "true") {
      this.props.history.push("/login");
    } else {
      const user = {
        email: this.state.email,
      };
      var postTry = [];
      axios
        .post("http://localhost:5000/post/followed", user)
        .then((res) => {
          res.data.map((posts) => {
            posts.map((post) => {
              return postTry.push(post);
            });
            return posts;
          });

          this.setState({
            posts: postTry,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleLike = (e) => {
    e.preventDefault();
    document.getElementById("like").style.color = "red";
  };

  handleComment(id) {
    return (event) => {
      event.preventDefault();
      let post = {
        postId: id,
        userName: sessionStorage.getItem("username"),
        userEmail: sessionStorage.getItem("email"),
        userProfile: sessionStorage.getItem("profile"),
        comment: this.state.comment,
      };
      axios
        .post("http://localhost:5000/comment", post)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  handleSavedPost(id,title,description,image,userProfile,userName,userEmail){
      return event =>{
        event.preventDefault();
        let post = {
            postId: id,
            userProfile: userProfile,
            userName: userName,
            userEmail: userEmail,
            title:title,
            description:description,
            image:image,
            savedEmail: sessionStorage.getItem('email')
        };
        axios
        .post("http://localhost:5000/saved", post)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="Main">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-8">
              {/* <Story/> */}
              {this.state.posts.map((post) => (
                <div className="container" key={post._id}>
                  <div
                    className="card text-center mb-5"
                    style={{ maxWidth: "80%" }}
                  >
                    <div className="card-header text-start">
                      <div className="row">
                        <div className="col-2 mt-2">
                          <img
                            style={{ borderRadius: "50%" }}
                            alt="user"
                            src={"/user/" + post.userProfile}
                            height="50px"
                            width="50px"
                          />
                        </div>
                        <div className="col-10 text-start">
                          <Link
                            style={{ textDecoration: "none" }}
                            to={"/user/" + post.userEmail}
                          >
                            <p>
                              <span style={{ fontSize: "24px" }}>
                                {post.userName}
                              </span>
                              <br />{" "}
                              <span
                                style={{ fontSize: "14px" }}
                                className="text-muted mt-2"
                              >
                                {post.title}
                              </span>
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link to={"/single/post/" + post._id}>
                      <img
                        src={"/posts/" + post.image}
                        alt="post"
                        height="100%"
                        width="100%"
                        className="card-img-top"
                      />
                    </Link>
                    <div className="card-body" align="start">
                      <div className="row">
                        <div className="col-6">
                          <img
                            style={{ float: "left" }}
                            alt="user"
                            src={"/user/" + post.userProfile}
                            height="50px"
                            width="50px"
                          />
                          <p className="card-text">
                            &nbsp;&nbsp;{post.description}
                          </p>
                        </div>
                        <div className="col-6 text-end">
                          <i
                            style={{ color: "#bdbdbd", fontSize: "1.5rem" }}
                            id="like"
                            onClick={this.handleLike}
                            className="fas fa-heart fa-1x"
                          ></i>
                          <i
                            style={{
                              color: "#bdbdbd",
                              marginLeft: "20px",
                              fontSize: "1.5rem",
                            }}
                            id="comment"
                            onClick={this.handleLike}
                            className="fas fa-comment fa-1x"
                          ></i>
                          <i
                            style={{
                              color: "#bdbdbd",
                              marginLeft: "20px",
                              fontSize: "1.5rem",
                            }}
                            id="share"
                            onClick={this.handleLike}
                            className="fas fa-paper-plane fa-1x"
                          ></i>
                          <i
                            style={{
                              color: "#bdbdbd",
                              marginLeft: "20px",
                              fontSize: "1.5rem",
                              cursor:"pointer"
                            }}
                            id="save"
                            onClick={this.handleSavedPost(
                              post._id,
                              post.title,
                              post.description,
                              post.image,
                              post.userProfile,
                              post.userName,
                              post.userEmail
                            )}
                            className="fas fa-bookmark fa-1x"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-muted">
                      <form id="form" onSubmit={this.handleComment(post._id)}>
                        <div className="row">
                          <div className="col-10">
                            <input
                              onChange={(e) =>
                                this.setState({ comment: e.target.value })
                              }
                              type="text"
                              className="form-control"
                              placeholder="Add a comment"
                            />
                          </div>
                          <div className="col-2">
                            <button className="btn btn-primary">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-4">
              <SuggestedUsers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
