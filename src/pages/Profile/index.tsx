import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={"mbcordeiro"}
            name={"Matheus Cordeiro"}
            avatarUrl={
              "https://avatars3.githubusercontent.com/u/55818513?s=460&u=20b00b19981de2d48883d8ad159db9db2ad06f4a&v=4"
            }
            followers={4}
            following={10}
            company={"Spintec"}
            location={"Bluemanu - SC"}
            email={undefined}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>

          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"mbcordeiro"}
                  reponame={"ecoleta"}
                  description={"Repository model"}
                  language={n % 3 === 0 ? "Javascript" : "Typescript"}
                  stars={10}
                  forks={2}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
