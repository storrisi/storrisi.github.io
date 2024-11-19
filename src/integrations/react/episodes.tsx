/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useState } from "react";

export const Episodes = qwikify$(() => {
  const blogPath = "src/routes/podcast";
  const blogEntries: any = {};
  const blogDirs = fs.readdirSync(path.join(blogPath));

  const [contents, setContents] = useState([]);
  const [category, setCategory] = useState("");

  const formatEpisodes = () => {
    console.log("formatEpisodes");

    blogDirs.forEach((blog) => {
      const fileContents = fs.readFileSync(
        path.join(blogPath, blog, "index@podcast.mdx")
      );
      const { data } = matter(fileContents);

      const title =
        data == undefined || data.title == undefined ? blog : data.title;
      const created_at =
        data == undefined || data.created_at == undefined
          ? Date.now()
          : data.created_at;
      blogEntries[Date.parse(created_at)] = { ...data, path: blog, title, created_at };
    });

    setContents(blogEntries);
  };

  console.log("contents");
  console.log(contents);
  console.log(category);


  if (blogDirs.length > 0 && Object.keys(contents).length === 0) formatEpisodes()

  return (
    <div className="container container-flex episodes" id="episodes">
      <div className="categories">
        <a onClick={() => alert("caffelattech")}>Caffèlattech</a>
        <p onClick={() => setCategory("storiedidevelopers")}>
          Storie di Developers
        </p>
        <p onClick={() => setCategory("hiddentechnologies")}>
          Hidden Technologies
        </p>
        <p onClick={() => setCategory("refactoringmindset")}>
          Refactoring Mindset
        </p>
      </div>
      <ul>
        {Object.keys(contents).length > 0 && Object.keys(contents)
          .sort()
          .reverse()
          .filter((data: string) => category ? contents[data].category === category ? true : false : true)
          .map((data: string) => (
            <li className="container container-flex episode">
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
                  <a href={"/podcast/" +contents[data].path}>{contents[data].title}</a>
                </h3>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
});
