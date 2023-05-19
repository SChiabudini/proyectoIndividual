const validation = (activityData) => {

    const errors = {};

    if(activityData.name.length > 50){
        errors.name = 'El nombre no puede contener más de 50 caracteres.';
    }

    if(activityData.duration > 24){
        errors.duration = 'Las actividades no pueden durar más de 24 hs.';
    }

    return errors;
}

export default validation;