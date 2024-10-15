const withLoading = (Component) => {
    return ({ isLoading, ...props }) => {
      if (isLoading) {
        return <div>Loading...</div>;
      }
      return <Component {...props} />;
    };
  };
  
  export default withLoading;