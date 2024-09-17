export function fetchData(inputSearch) {
  const searchParams = new URLSearchParams({
    key: '46020847-b0dc78394505c5145868b7f5c',
    q: `${inputSearch}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
