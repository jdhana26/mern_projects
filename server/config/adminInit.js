import Admin from '../models/modelAdmin.js';
import bcrypt from 'bcrypt';

const seedAdmin = async () => {
    try {
        const adminEmail = 'admin@gmail.com';
        const adminPassword = 'admin321';

        const adminExists = await Admin.findOne({ email: adminEmail });

        if (!adminExists) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(adminPassword, salt);

            const newAdmin = new Admin({
                email: adminEmail,
                password: hashedPassword
            });

            await newAdmin.save();
            console.log('Admin account created successfully');
        } else {
            console.log('Admin account already exists');
        }
    } catch (error) {
        console.error('Error seeding admin:', error);
    }
};

export default seedAdmin;
