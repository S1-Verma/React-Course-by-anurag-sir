const container =
  (
      <section className="img-section">
        <p>The library for web and native user interface</p>
      <img
        src="https://www.pngmart.com/files/23/React-Logo-PNG-Pic.png"
        alt=""
      />
    <form action="submit">
      <input type="text" placeholder="Enter Id " />
      <input type="current-password" placeholder="Enter Password " />
    </form>
    </section>
  )

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
