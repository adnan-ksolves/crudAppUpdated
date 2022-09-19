
const cws = async (url, method, body) => {
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(body)
  });

  return res;

}

export default cws;