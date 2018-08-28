import React from "react";

import { connect } from "react-redux";
import * as AuthActions from "../store/actions";

const Main = ({ signIn }) => (
  <div>
    <h1>Main</h1>
    <button onClick={signIn}>Entrar</button>
  </div>
);

export default connect(
  null,
  AuthActions
)(Main);
