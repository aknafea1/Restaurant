import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  const [user, setUser] = useState({ userName: "", password: "" });
  return (
    <form>
      <div className="wrapper" style={{ display: "flex", gap: "16px" }}>
        <Input
          label={"first name"}
          name={"firstname"}
          caret={"#543c99ff"}
          type={"text"}
          onChange={(e) => {
            setUser({ ...user, userName: e.target.value });
          }}></Input>
        <Input
          label={"Second Name"}
          name={"secondname"}
          caret={"#543c99ff"}
          type={"text"}
          onChange={({ target: { value } }) => {
            setUser({ ...user, password: value });
          }}></Input>
      </div>
      <h2
        style={{
          textAlign: "left",
          fontWeight: "500",
          fontSize: "18px",
          margin: "8px 0",
        }}>
        Adress
      </h2>
      <Input
        label={"Street Address"}
        name={"secondname"}
        caret={"#543c99ff"}
        type={"text"}
        scale={2}></Input>
      <Input
        label={"Street Line 2"}
        name={"addressTwo"}
        caret={"#543c99ff"}
        type={"tex"}
        scale={2}></Input>
      <div className="wrapper" style={{ display: "flex", gap: "16px" }}>
        <Input
          label={"City"}
          name={"city"}
          caret={"#543c99ff"}
          type={"text"}></Input>
        <Input
          label={"state"}
          name={"state"}
          caret={"#543c99ff"}
          type={"text"}></Input>
      </div>
      <Button
        type={"submit"}
        style={{ margin: "16px 0" }}
        onClick={(e) => {
          e.preventDefault();
          console.log(user);
        }}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
