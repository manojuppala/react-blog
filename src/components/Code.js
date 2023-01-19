import React from "react";

const Code = ({ snippet }) => {
  return (
    <pre className="prettyprint">
      <code className="language-c">{snippet}</code>
    </pre>
  );
};

export default Code;
