const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count = count + 1;
    console.log(count);
    return count;
  }

  return (
    <>
      <h2>useState error example</h2>
      <p>{count}</p>
      <button onClick={handleClick} className="btn">
        Increment
      </button>
    </>
  );
};

export default ErrorExample;
