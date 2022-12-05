import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "#b1b1b1" : "black" }}>
          About Us
        </h1>

        <div className="accordion" id="accordionExample">
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "dark" ? "#000" : "white",
              color: props.mode === "dark" ? "#b1b1b1" : "black",
            }}
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                style={{
                  backgroundColor: props.mode === "dark" ? "#000" : "white",
                  color: props.mode === "dark" ? "#b1b1b1" : "black",
                }}
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                You can have your text edited with us
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                style={{
                  backgroundColor: props.mode === "dark" ? "#000" : "white",
                  color: props.mode === "dark" ? "#b1b1b1" : "black",
                }}
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                We can have your text manipulated with you
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#000" : "white",
                  color: props.mode === "dark" ? "#b1b1b1" : "black",
                }}
              >
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "dark" ? "#000" : "white",
                  color: props.mode === "dark" ? "#b1b1b1" : "black",
                }}
              >
                You can have your text edited with us #1
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#000" : "white",
                  color: props.mode === "dark" ? "#b1b1b1" : "black",
                }}
              >
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
