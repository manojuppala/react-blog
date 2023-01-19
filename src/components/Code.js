import React from "react";

const Code = ({ snippet, lang }) => {
  return (
    <pre className="prettyprint">
      <code className={lang ? `language-${lang}` : ``}>{snippet}</code>
    </pre>
  );
};

export default Code;
