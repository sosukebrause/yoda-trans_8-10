import React from "react";

const TranslationInputs = (props) => {
  return (
    // <div>
    //   <h1>Hello from inputs</h1>
    // </div>

    <form>
      <div class="input-group mb-3">
        <input
          type="text"
          name="text"
          class="form-control"
          placeholder="Recipient's username"
          onChange={props.editText}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
    </form>
  );
};

export default TranslationInputs;
