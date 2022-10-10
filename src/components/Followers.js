import styled from "styled-components";
const Followers = (props) => {
  const users = props.data;
  return (
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .user-container {
    text-align: center;

    display: block;
    justify-content: space-between;
    flex-wrap: wrap;
    .user {
      height: auto;
      width: 100%;
      padding: 1rem;
      border-radius: 3px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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
  @media (min-width: 600px) {
    .user-container {
      display: grid;
      gap: 3rem 5rem;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
    }
  }
`;
export default Followers;
