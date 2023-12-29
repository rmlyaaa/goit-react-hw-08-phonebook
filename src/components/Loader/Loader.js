import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 200,
        left: '50%',
      }}
    >
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="black"
        secondaryColor="white"
      />
    </div>
  );
};
