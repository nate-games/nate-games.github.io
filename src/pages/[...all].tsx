function All() {
  return (
    <>
      <main className="flex justify-center items-center mt-40">
        <div>
          <h3 className="flex items-center justify-center gap-2 text-lg text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-red-500 h-5 w-5"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>{" "}
            Page not found
          </h3>
          <p className="text-sm text-left mt-2 max-w-80 text-[#bbb]">
            Sorry, That page was not found on server or you do not have access.
          </p>
        </div>
      </main>
    </>
  );
}

export default All;
