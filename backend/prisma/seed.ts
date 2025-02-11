import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// async function main() {
    
//     // Hash password before storing (recommended for security)
//     const hashedPassword = await bcrypt.hash("SecurePass123!", 10);

//     // Seeding Users
//     await prisma.user.createMany({
//         data: [
//             {
//                 firstName: "Gavin",
//                 lastName: "Hensley",
//                 email: "gavin@example.com",
//                 password: hashedPassword, // Store hashed password
//             }
//         ],
//     });

//     await prisma.project.createMany({
//         data: [
//             {
//                 title: "Cybersecurity Portfolio",
//                 description: "A personal portfolio for a cybersecurity professional.",
//                 techStack: "HTML, CSS, JavaScript",
//                 githubLink: "https://github.com/B-Hensley/cybersecurity-portfolio.git",
//                 liveDemoLink: "https://brendahensley.tech",
//                 imageUrl: "",
//             },
//         ],
//     });

//     console.log("Seed data has been added!");
// }

// main()
//     .catch((e) => {
//         console.error(e);
//         process.exit(1);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });
