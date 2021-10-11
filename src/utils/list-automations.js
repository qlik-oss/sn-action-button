const getAllAutomations = async (url, items = []) => {
  try {
    const page = await fetch(url).then((response) => response.json());
    const response = page;
    const responseData = response.data;
    if (response.links.next) {
      const nextPage = response.links.next.href;
      items = items.concat(await getAllAutomations(nextPage, items));
    }
    items = items.concat(responseData);
    return items;
  } catch (error) {
    return error;
  }
};

export default getAllAutomations;
