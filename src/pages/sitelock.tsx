function Sitelock() {
  return (
    <main>
      <div className="pt-[15%] px-6 relative flex justify-center items-center z-[1]">
        <div>
          <h2 className="text-xl mb-2">Sitelock</h2>
          <p className="text-sm text-[#bbb] inline-block text-left max-w-[75vw] sm:max-w-[50vw]">
            If you found this by accident you will not need to read this please
            go back to{" "}
            <a href="https://nate-games.github.io">nate-games.github.io</a>{" "}
            which is the original site that you were trying to access.
            Otherwise, our website has implemented sitelock to protect you from
            online copies and unallowed reproduced sites. We are sorry if you
            were only attempting for curiosity but this is for security. This
            page can be edited depending on the copy, most code is encrypted and
            obfuscated so most functions will not work.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Sitelock;
