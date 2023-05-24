import Form from "../Form/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import style from './Activities.module.css';

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
    <div className={style.container}>
        <div className={style.activities}>
            {activities.map(({ name, difficulty, duration, season, image }) => (
                <div key={name} className={style.activity}>
                  <img src={image} alt={name}/>
                  <h5>{name}</h5>
                  <p>Dificultad: {difficulty}</p>
                  <p>Duración: {duration}</p>
                  <p>Temporada: {season}</p>
                </div>
            ))}
        </div>
        <div className={style.form}>
          <Form />
        </div>
    </div>
  );
};

export default Activities;
