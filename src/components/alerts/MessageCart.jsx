// eslint-disable-next-line react/prop-types
const MessageCart = ({ showMessage, message }) => {
  return (
    <div
      className={`absolute bottom-4 right-2 py-4 px-4 text-white bg-primary-100 shadow-[4px_4px_4px_rgba(0,0,0,0.2)] rounded-lg ${
        showMessage
          ? 'block opacity-100  translate-x-0'
          : 'opacity-0 translate-x-72'
      } transition-all duration-300 ease-linear`}
    >
      {message}
    </div>
  );
};

export default MessageCart;
