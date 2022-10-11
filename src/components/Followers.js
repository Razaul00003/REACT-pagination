import styled from "styled-components";
import { useState } from "react";
const Followers = (props) => {
  const data = props.data;
  const [start, setStart] = useState(0);
  const [users, setUsers] = useState([]);
  const [showStatus, setShowStatus] = useState(false);

  const handleShowStatus = () => {
    setShowStatus(true);

    let perPageItem = 10;
    let selectedusers = data.slice(start, start + perPageItem);
    console.log(start, perPageItem, selectedusers);
    setUsers(selectedusers);
    console.log(users);
    // setUsers(selectedusers);
  };
  const handlePrev = () => {
    if (start > 0) {
      let perPageItem = 10;
      setStart(start - 10);
      let selectedusers = data.slice(start, start + perPageItem);
      console.log(start, perPageItem, selectedusers);
      setUsers(selectedusers);
    }
  };
  const handleNext = () => {
    if (start < 30) {
      let perPageItem = 10;
      setStart(start + 10);
      let selectedusers = data.slice(start, start + perPageItem);
      console.log(start, perPageItem, selectedusers);
      setUsers(selectedusers);
    }

    console.log(users);
  };

  return (
    <>
      {!showStatus ? (
        <button
          style={{ padding: "1rem 2rem", color: "#e84118", border: "none" }}
          onClick={handleShowStatus}
        >
          {" "}
          Show Users
        </button>
      ) : (
        <Wrapper className="container">
          <div className="user-container">
            {users.map((user, index) => {
              const { avatar_url, login, html_url } = user;
              return (
                <div className="user" key={index}>
                  <img src={avatar_url} alt={login} />
                  <p>{login}</p>
                  <a href={html_url}> View Github Profile</a>
                </div>
              );
            })}
          </div>
          <div className="btn-container">
            <button className="btn" onClick={handlePrev}>
              &larr;
            </button>
            {users.map((_, index) => {
              return (
                <button className="btn" key={index}>
                  {index + start}
                </button>
              );
            })}
            <button className="btn" onClick={handleNext}>
              &rarr;
            </button>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  .show-user {
    padding: 1rem 2rem;
  }
  .user-container {
    text-align: center;

    display: block;
    .user {
      height: 350px;
      max-width: 300px;
      padding: 1rem;
      border-radius: 3px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        max-height: auto;
        max-width: 250px;
        margin: auto;
        border-radius: 50%;
      }
      p {
        color: #e84118;
      }
      a {
        text-decoration: none;
        display: inline-block;
        background-color: #e84118;
        padding: 5px 10px;
        color: #fff;
      }
    }
  }

  .btn-container {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 5rem auto;
    .btn {
      padding: 5px;
      margin: 1rem;
      border: none;
      height: 2rem;
      width: 2rem;
      font-size: 1rem;
      border-radius: 50%;
      text-align: center;

      color: #e84118;
    }
  }
  @media (min-width: 600px) {
    .user-container {
      display: grid;
      gap: 3rem 5rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }
  @media (min-width: 800px) {
    .user-container {
      grid-template-columns: auto auto auto;
      grid-template-rows: auto;
    }
  }
`;
export default Followers;
