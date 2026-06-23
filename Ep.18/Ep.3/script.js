const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", { className: "main-section", key: 12 }, [
      React.createElement(
        "p",
        { className: "paregraph", key: 9 },
        "this is a p tag Created in React",
      ),

      React.createElement("img", {
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.33CwBYkmnMfpA9Djup22JwHaHa%3Fpid%3DApi&f=1&ipt=cc9cb7ee3eb53b09fdead155f84aac725b50e24d03ff9d20eea655c885a9c621&ipo=images",
        style: { width: 300 },
        key: 5,
      }),

      React.createElement(
        "form",
        { className: "form", key: 10, style: { display: "flex", gap: 10 } },
        [
          React.createElement("input", {
            className: "fistName",
            placeholder: "Enter Your first Name",
            key: 1,
          }),
          React.createElement("input", {
            className: "lastName",
            placeholder: "Enter your Last Name ",
            key: 2,
          }),
          React.createElement(
            "button",
            {
              className: "submitBTN",
              placeholder: "Enter your Last Name ",
              key: 3,
            },
            "Submit",
          ),
        ],
      ),
      React.createElement(
        "p",
        { className: "showPara", key: 6 },
        "fullName of User ",
      ),
    ]),
  ],
);

<<<<<<< HEAD

=======
// const fistName = document.querySelector('.firstName');
// const lastName = document.querySelector('.lastName');
// const submitBTN = document.querySelector('.sumitBTN');
// const showPara = document.querySelector('.showPara') ;

// submitBTN.addEventListener("click", (e)=>{
//     showPara.textContent = {fistName, lastName}
// })
>>>>>>> c5c843ada44841ccb20bb237ccce7d0b1173f0dd

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
