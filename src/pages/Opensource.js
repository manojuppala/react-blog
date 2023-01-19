import React from "react";
import { useDocumentTitle } from "../utils";

const Opensource = () => {
  useDocumentTitle("Open-source");
  return (
    <React.Fragment>
      <p class="h5 text-primary">Github stats</p>
      <div class="card-deck" style={{ justifyContent: "center" }}>
        <a href="https://github.com/manojuppala" target="_blank" rel="noopener noreferrer">
          <img
            class="mb-2 embed-responsive"
            height="160em"
            src="https://github-readme-stats-git-master.manojuppala.vercel.app/api?username=manojuppala&show_icons=true&title_color=cdd9e5&icon_color=cdd9e5&text_color=cdd9e5&bg_color=22272e&hide_border=true"
            alt=""
          />
        </a>
        <a href="https://github.com/manojuppala" target="_blank" rel="noopener noreferrer">
          <img
            class="mb-2 embed-responsive"
            height="160em"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=manojuppala&layout=compact&title_color=cdd9e5&icon_color=cdd9e5&text_color=cdd9e5&bg_color=22272e&hide_border=true"
            alt=""
          />
        </a>
      </div>

      <p class="h5 text-primary">Contributions</p>
      <div class="card-deck" style={{ justifyContent: "center" }}></div>
    </React.Fragment>
  );
};

export default Opensource;
