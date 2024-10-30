const getwishlist = () => {
  const storedwishlist = localStorage.getItem("homewishlist");
  if (storedwishlist) {
    return JSON.parse(storedwishlist);
  }
  return [];
};

const savewishlist = (id) => {
  const getallwishlist = getwishlist();

  const exist = getallwishlist.find((wish) => wish === id);

  if (!exist) {
    getallwishlist.push(id);
    localStorage.setItem("homewishlist", JSON.stringify(getallwishlist));
  }
};

export { getwishlist, savewishlist };
