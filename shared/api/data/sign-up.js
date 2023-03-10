export const signUp = async ({
  storageId,
  ...values
}) => {
  const result = {
    data: null,
    result: false,
  };

  try {
    const res = await fetch(`https://cms.backend.sizze.io/user/${storageId}/register/`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ""
      },
      body: JSON.stringify({
          values: {           ...values,
          },
      }),
    });

    if (res.ok) {
      result.data = await res.json();
      result.result = true;
    } else {
      result.data = await res.json();
      result.result = false;
    }
  } catch (e) {
    console.error(e);
  }

  return result;
};