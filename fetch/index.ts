export const fetchPost = async <
  P extends object | null = null,
  R extends object | null = null,
>(
  url: string,
  data: P,
): Promise<R> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
