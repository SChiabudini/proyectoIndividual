import Form from "../Form/Form";
import { useState, useEffect } from "react";
import axios from "axios";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      try {
        const response = await axios.get('/activities');
        setActivities(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getActivities();
  }, []);

  return (
    <div>
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold', width: '25%' }}>Nombre</div>
                <div style={{ fontWeight: 'bold', width: '25%' }}>Dificultad</div>
                <div style={{ fontWeight: 'bold', width: '25%' }}>Duración</div>
                <div style={{ fontWeight: 'bold', width: '25%' }}>Temporada</div>
            </div>
            {activities.map(({ name, difficulty, duration, season }) => (
                <div key={name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <div style={{ width: '25%' }}>{name}</div>
                <div style={{ width: '25%' }}>{difficulty}</div>
                <div style={{ width: '25%' }}>{duration}</div>
                <div style={{ width: '25%' }}>{season}</div>
                </div>
            ))}
        </div>
        <Form />
    </div>
  );
};

export default Activities;
