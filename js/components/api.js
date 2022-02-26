export default async function getRequest(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  } finally {
    console.log("loading complete");
  }
}
