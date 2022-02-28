/* Components */
import { ErrorMessage } from 'components/atoms';
import { ProgressStatus } from 'components/organisms';

/* Hooks */
import { useProgressData } from 'hooks';

/* Styles */
import HomePageStyled from './home.styled';

export const HomePage = () => {
  const { progressData, error } = useProgressData();

  return (
    <HomePageStyled.HomePageContainer fixed>
      {error ? <ErrorMessage /> : <ProgressStatus progress={progressData} />}
    </HomePageStyled.HomePageContainer>
  );
};
