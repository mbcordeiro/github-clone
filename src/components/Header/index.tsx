import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, GithubLogo, SearchForm } from "./styles";
import { ThemeName } from "../../styles/themes";

const [search, setSearch] = useState("");

const navigate = useNavigate();

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme}>
        <SearchForm onSubmit={handleSubmit}>
          <input
            placeholder="Enter Username or Repo..."
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
        </SearchForm>
      </GithubLogo>
    </Container>
  );
};

export default Header;
