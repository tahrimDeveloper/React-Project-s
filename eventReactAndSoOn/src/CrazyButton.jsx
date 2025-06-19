function MyButton({ message, children }) {
  function handleClick(event, message) {
    // console.log(event.target);
    console.log(message);
  }

  return (
    <button
      onClick={event => handleClick(event, message)}
      className="bg-purple-600 text-white p-1 rounded cursor-pointer">
      {children}
    </button>
  );
}

export default function CrazyButton() {
  return (
    <div className="flex gap-1.5">
      <MyButton message="Dancing!">Dance</MyButton>
      <MyButton message="Jumpping!">Jump</MyButton>
    </div>
  );
}
