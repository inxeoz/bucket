async function fetchGet(url) {
  try {
    const response = await fetch(url, {
      headers: {
        Cookie: state.cookies,
      },
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    throw new Error('An error occurred while fetching data');
  }
}


async function fetchPost({base_url, data}) {
  try {
  
    const response = await fetch(base_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.text();
  } catch (error) {
    console.error('Error occurred while verifying credentials:', error);
    throw new Error('An error occurred while verifying credentials');
  }
}
export { fetchPost,  fetchGet };