

function useOpenAI() {

  const getCompletion = async (prompt: string) => {
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
  
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
      return { error: "Something went wrong" };
    }
  };

  return getCompletion;
}

export default useOpenAI;
