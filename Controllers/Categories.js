const categories = require('../Models/Categories')



const  Categories   = async(req , res)=>{
    const { name } = req.body

    if (!name) {
        return res.status(400).send({ Message: "Write the name of Category" })
    }

    const checkcategory = await categories.findOne({ name })

    if (checkcategory) {
        return res.status(400).send({ Message: "Category Already Exist" })
    }

   
    const Newuser = new categories({ name })

    const result = await Newuser.save()

    if (result) {
        return res.status(200).send({ Message: "Category Save Sucessfully" })
    } else {
        return res.status(400).send({ Message: 'Failed to Save' })
    }
}


const Allcategories = async (req, res) => {
    try {
        const getalluser = await categories.find();
        if (getalluser) {
            return res.status(200).send(getalluser);
        } else {
            return res.status(400).send({ Message: "No Category found" });
        }
    } catch (error) {
        console.error('Error retrieving users:', error);
        return res.status(500).send({ Message: 'Internal Server Error' });
    }
};

module.exports = {Categories , Allcategories }