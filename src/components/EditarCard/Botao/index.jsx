const stylesButton = {
  submit:
    "px-6 py-2 font-semibold uppercase border-4 border-emphisis bg-black cursor-pointer text-center text-emphisis text-nowrap text-sm rounded-xl lg:text-lg xl:text-lg",
  reset:
    "px-6 py-2 font-semibold uppercase border-4 border-white cursor-pointer text-center text-white text-nowrap text-sm rounded-xl lg:text-lg xl:text-lg",
};

export default function Botao({ children, type, reset }) {
  return (
    <>
      <button
        className={type === "submit" ? stylesButton.submit : stylesButton.reset}
        type={type}
        onClick={reset}
      >
        {children}
      </button>
    </>
  );
}
