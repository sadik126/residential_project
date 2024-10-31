const getwishlist = () => {
  const storedwishlist = localStorage.getItem("homewishlist");
  if (storedwishlist) {
    return JSON.parse(storedwishlist);
  }
  return [];
};

const getallestates = () => {
  const storedestates = localStorage.getItem("estates");
  if (storedestates) {
    return JSON.parse(storedestates);
  }
  return [];
};

const saveallestates = () => {
  const getestates = getallestates();

  localStorage.setItem("estates", JSON.stringify(getestates));
};

const savewishlist = (id) => {
  const getallwishlist = getwishlist();

  const exist = getallwishlist.find((wish) => wish === id);

  if (!exist) {
    getallwishlist.push(id);
    localStorage.setItem("homewishlist", JSON.stringify(getallwishlist));
  }
};

export { getwishlist, savewishlist, getallestates, saveallestates };
