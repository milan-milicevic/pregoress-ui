import { ErrorBoundary } from 'react-error-boundary';

/* Components */
import { ErrorMessage } from 'components/atoms';
import { ProgressStatus } from 'components/organisms';

/* Providers */
import { ProgressDataProvider } from 'providers';

/* Styles */
import HomePageStyled from './home.styled';

export const HomePage = () => {
  return (
    <HomePageStyled.HomePageContainer fixed>
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <ProgressDataProvider>
          <ProgressStatus />
        </ProgressDataProvider>
      </ErrorBoundary>
    </HomePageStyled.HomePageContainer>
  );
};
