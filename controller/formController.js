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
            text: `You have successfully submitted GATE application. We will call you back ASAP!!!! `,
        };
        // admin
        const mailOptions2 = {
            from: 'VidyalankarClasses',
            to: 'aryankadu77@gmail.com',
            subject: `GATE asprient has applied  ${data.name}`,
            text: ` name : ${data.first_name + ' ' + data.last_name}  \n  contact : ${data.contact} \n  email:${data.email}  `,
            html: ` <h3>name : ${data.first_name + ' ' + data.last_name}  \n  contact : ${data.contact} \n  email:${data.email} \n  </h3>`
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
        text: `your OTP for GATE application  is ${data.Gen_OTP}`,
        html:`<div ><h3>Your OTP for GATE application  is</h3> <h1 style="color:green;">${data.Gen_OTP}</h1></div>`
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



