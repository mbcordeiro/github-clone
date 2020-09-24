import React from "react";

import { Container, GithubLogo, SearchForm } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo>
        <SearchForm>
          <input placeholder="Enter Username or Repo..." />
        </SearchForm>
      </GithubLogo>
    </Container>
  );
};

export default Header;
