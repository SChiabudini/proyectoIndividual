const { Activity } = require('../../db');

const postActivity = async (req, res) => {

    const { name, difficulty, duration, season } = req.body; 

    try {
        if(!name || !name.trim() || !difficulty || !season){
            throw new Error('Data missing');
        };

        const [activity, created] = await Activity.findOrCreate(
            {
                where: { name },
                defaults: { difficulty, duration, season }
            }
        );
        
        return res.status(200).json({ activity, created });

    } catch (error) {

        if(error.message.includes('missing')) return res.status(400).send(error.message);

        return res.status(500).send(error.message);
    }

}

module.exports = postActivity;