import * as React from 'react';
import tw from 'twin.macro';

const TwMain = tw.main`
  flex flex-col justify-center items-center h-screen bg-light dark:bg-dark dark:text-light transition duration-200
`;

const TwHeading = tw.h1`
  text-3xl font-bold tracking-wider
`;

const StyledButton = tw.button`
  text-sm bg-dark text-light dark:bg-light dark:text-dark px-4 py-2 mt-8 rounded-full focus:outline-none hover:opacity-80 transition duration-200
`;

const IndexPage = () => {
  const [darkModeActive, setDarkModeActive] = React.useState(false);

  return (
    <div className={darkModeActive ? 'dark' : ''}>
      <TwMain>
        <TwHeading>Gatsby + Tailwind</TwHeading>
        <StyledButton onClick={() => setDarkModeActive(!darkModeActive)}>
          {`Turn ${darkModeActive ? 'off' : 'on'} Dark Mode`}
        </StyledButton>
      </TwMain>
    </div>
  );
};

export default IndexPage;
