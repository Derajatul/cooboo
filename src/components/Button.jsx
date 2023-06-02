/* eslint-disable react/prop-types */
const Button = ({text}) => {
  return (
    <a
      className=' btn-primary btn flex items-center justify-center text-center text-white lg:mr-auto lg:w-44'
      href='/menu'
    >
      {text}
    </a>
  );
};
export default Button
