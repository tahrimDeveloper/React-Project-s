import { useState, useEffect } from 'react';

function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // https://api.github.com/users/tahrimdeveloper

    const FatchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const responseData = await response.json();
        setUser(responseData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    FatchData();
  }, [username]);
  return [user, loading, error];
}

export default useGithubUser;
