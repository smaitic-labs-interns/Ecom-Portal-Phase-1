const { readFile, writeFile } = require("fs/promises");

exports.readJson = async (file_path) => {
  let string = await readFile(file_path, "utf-8");
  return JSON.parse(string);
};

exports.writeFile = async (file_path, data) => {
  try {
    await writeFile(file_path, JSON.stringify(data));
  } catch (error) {
    throw error;
  }
};
