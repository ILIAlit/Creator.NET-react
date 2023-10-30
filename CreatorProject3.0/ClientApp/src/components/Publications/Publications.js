import { useEffect, useState } from "react";



const Publications = () => {
  const [allPublication, setPublications] = useState([]);

  const getPublications = async () => {
    const options = {
      method: 'GET'
    }
    const respons = await fetch(`/api/publications`, options);
    if(respons.ok){
      const publications = await respons.json();
      setPublications(publications);
      console.log(publications);
      return publications;
    }
    return null;
  }

  useEffect(() => {
    getPublications();
  }, [])

  return (
    <>
      <h1>Публикации</h1>
      {allPublication.map((item) => {
        return(
          <div key={item.id}>
            <span>{item.id}</span>
            <span>{item.publication_name}</span>
            <span>{item.publication_version}</span>
          </div>
        )
      })}
    </>
  );
}

export default Publications;