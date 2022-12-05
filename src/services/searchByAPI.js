const API_PATH = 'https://pixabay.com/api/';
const API_KEY = '30862042-0df1a58bd13a46a6d149ce250';
const itemsPerPage = 12;

export async function searchByAPI(entrie, pageNum) {
  const response = await fetch(
    `${API_PATH}?q=${entrie}&page=${pageNum}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${itemsPerPage}`
  );
  return response.json();
}
