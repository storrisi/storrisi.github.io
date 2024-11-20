/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";

import { useState } from "react";

export const Episodes = qwikify$(
  ({ blogEntries }: { blogEntries: any }) => {
    const [contents] = useState<any>({ ...blogEntries });
    const [category, setCategory] = useState("");

    return (
      <div className="container-flex episodes" id="episodes">
        <div className="container-flex categories">
          <button
            className={`category ${category === "" ? "selected" : ""}`}
            onClick={() => setCategory("")}
          >
            Tutti
          </button>
          <button
            className={`category ${category === "caffelattech" ? "selected" : ""}`}
            onClick={() => setCategory("caffelattech")}
          >
            Caffèlattech
          </button>
          <button
            className={`category ${category === "storiedidevelopers" ? "selected" : ""}`}
            onClick={() => setCategory("storiedidevelopers")}
          >
            Storie di Developers
          </button>
          <button
            className={`category ${category === "hiddentechnologies" ? "selected" : ""}`}
            onClick={() => setCategory("hiddentechnologies")}
          >
            Hidden Technologies
          </button>
          <button
            className={`category ${category === "refactoringmindset" ? "selected" : ""}`}
            onClick={() => setCategory("refactoringmindset")}
          >
            Refactoring Mindset
          </button>
        </div>

          <ul className="episodes-list">
            {Object.keys(contents).length > 0 &&
              Object.keys(contents)
                .sort()
                .reverse()
                .filter((data: string) =>
                  category
                    ? contents[data].category === category
                      ? true
                      : false
                    : true
                )
                .map((data: string) => (
                  <li className="container-flex episode">
                    <div className="podcast_image_wrapper">
                      <a href={"/podcast/" + contents[data].path}>
                        <img
                          className="podcast_image"
                          width="320"
                          height="180"
                          src={`http://img.youtube.com/vi/${contents[data].youtube_id}/mqdefault.jpg`}
                        />
                      </a>
                    </div>
                    <div className="podcast_text">
                      <p>{contents[data].created_at}</p>
                      <h3 className="podcast_title">
                        <a href={"/podcast/" + contents[data].path}>
                          {contents[data].title}
                        </a>
                      </h3>
                    </div>
                  </li>
                ))}
          </ul>
       
      </div>
    );
  },
  { eagerness: "hover" }
);
