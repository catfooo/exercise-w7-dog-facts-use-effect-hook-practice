// DogFact Component
export const DogFact = ({fact}) => {
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop
  const cleanFact = fact ? fact?.attributes?.body : null;
  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return <div>${cleanFact ? {cleanFact} : "loading" }</div>;
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
