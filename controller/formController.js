import formModel from "../models/formModel.js";
import { createTransport } from 'nodemailer';



export const newUser = async (req, res) => {
    const data = req.body;

    // const exist = await formModel.findOne({ 'contact': data.contact });
    const exist = await formModel.findOne({ 'contact': 1 });

    if (exist) {
        res.status(400).json({
            success: false,
            msg: "user exist",
            exist
        })
    }
    if (!exist) {

        const result = await formModel.create(data);

        // snd success mail to user + admin
        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: 'rkoko5095@gmail.com',
                pass: 'vglckvjynlwozecn'
            }
        });

        // student
        const mailOptions = {
            from: 'VidyalankarClasses',
            to: data.email,
            subject: 'Your GATE application ',
            text: `You have been successfuly submitted application. We will call you back ASAP!!!! `,
        };
        // admin
        const mailOptions2 = {
            from: 'VidyalankarClasses',
            to: 'aryankadu77@gmail.com',
            subject: 'GATE asprient has applied',
            text: ` name : ${data.Fname + ' ' + data.Lname}  \n  contact : ${data.contact} \n  email:${data.email} `,
        };

        const mailis = await transporter.sendMail(mailOptions);
        const mailis2 = await transporter.sendMail(mailOptions2);
        res.status(200).json({
            success: true,
            msg: "user added",
            result
        })
    }

}





// otp mail 
export const sndOTP = async (req, res) => {

    const data = req.body;




    

    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'rkoko5095@gmail.com',
            pass: 'vglckvjynlwozecn'
        }
    });

    const mailOptions = {
        from: 'VidyalankarClasses',
        to: data.email,
        subject: 'email verififcation ',
        text: `your OTP for username is ${data.Gen_OTP}`,
    };

    const mailis = await transporter.sendMail(mailOptions);

    if (mailis) {
        res.status(200).json({
            success: true,
            msg: 'OTP send',
            mailis
        })

        if (!mailis) {
            res.status(400).json({
                success: false,
                msg: 'OTP not send',
                mailis
            })
        }
    }
}


// snd success email



