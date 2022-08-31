import pool from "../config/connectDB";
import multer from "multer";
// import Pool from "mysql2/typings/mysql/lib/Pool";

// let getHomePage = (req, res) => {
//   let data = [];
//   pool.query("SELECT * FROM `keepers` ", function (err, results, fields) {
//     results.map((row) => {
//       data.push({
//         id: row.id,
//         content: row.content,
//       });
//     });

//     return res.render("index.ejs", { data: data });
//   });
// };
let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM keepers");
  let check = false;
  let id = req.params.id;
  return res.render("./index.ejs", {
    data: rows,
    check: check,
    id: id,
  });
};
let getAboutPage = (req, res) => {
  return res.render("about.ejs");
};
let postNewKeep = async (req, res) => {
  let { content_keep } = req.body;
  await pool.execute("insert into keepers(content) values (?)", [content_keep]);
  return res.redirect("/");
};
let postDeleteKeep = async (req, res) => {
  let keeperId = req.body.keepers;
  // console.log("check", req.body.keepers);
  await pool.execute("delete from keepers where id = ?", [keeperId]);
  return res.redirect("/");
};
let getEditKeep = async (req, res) => {
  let id = req.params.id;
  let check = req.params.check;
  console.log(id);
  const [rows, fields] = await pool.execute("SELECT * FROM keepers");
  check = true;
  let [user] = await pool.execute("SELECT * FROM keepers");

  for (let index = 0; index < user.length; index++) {
    if (user[index].id === id) {
      return res.render("./index.ejs", {
        data: rows,
        check: check,
        id: id,
      });
    }
  }
};
let postUpdateKeep = async (req, res) => {
  let { content, id } = req.body;
  console.log("check data ", content, id);
  await pool.execute("update keepers set content= ? where id = ?", [
    content,
    id,
  ]);

  return res.redirect("/");
};
// return res.redirect("/");
module.exports = {
  getHomepage,
  getAboutPage,
  postNewKeep,
  postDeleteKeep,
  getEditKeep,
  postUpdateKeep,
};
