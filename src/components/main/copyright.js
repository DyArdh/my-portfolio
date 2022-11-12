const Copyright = () => {
  return (
    <div className="flex justify-center items-center text-center mt-4">
      <p className="text-md font-medium text-gray-200">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://twitter.com/AndikoYoga5">DyArdh.</a>All Rights Reserved
      </p>
    </div>
  );
};

export default Copyright;
