import axios from "axios"
import userModel from "../models/userModel.js"
import { isValidObjectId } from "mongoose"

export const generateImage = async (req, res) =>{
    try {
        const {prompt} = req.body;
        const userId = req.userId;

        if (!isValidObjectId(userId)){
            return res.json({success:false, message: 'Invalid User'});
        }

        const user = await userModel.findById(userId)

        if(!user || !prompt){
            return res.json({success:false, message: 'Missing Details'})
        }

        if(user.creditBalance === 0 || user.creditBalance < 0){
            return res.json({success: false, message: 'No Credit Balance', creditBalance: user.creditBalance})
        }

        const { data } = await axios.post(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/black-forest-labs/flux-1-schnell`,
            { prompt },
            { headers: { 'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}` } }
        )

        if (!data.success) {
            const message = data.errors?.[0]?.message || 'Image generation failed'
            return res.json({ success: false, message })
        }

        const resultImage = `data:image/jpeg;base64,${data.result.image}`

        await userModel.findByIdAndUpdate(user._id, {creditBalance:user.creditBalance - 1})

        res.json({success: true, message: "Image Generated", creditBalance: user.creditBalance - 1, resultImage})

    } catch (error) {
        console.log(error.message)
        res.json({success: false, message:error.message})
    }
}
