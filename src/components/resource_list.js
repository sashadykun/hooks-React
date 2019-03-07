import React from 'react';

import useResources  from './use_resources';


const ResourceList = ({ resource } ) =>  {

    const resources = useResources(resource);

    // const fetchResource = async (resource) => {
    //    const resp = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

    //    setResources(resp.data);
       
    // }

    
    
    return (
    <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
    )
    
}

export default ResourceList;