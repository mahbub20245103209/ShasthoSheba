import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const doctors = [
  { name: "Md. Rahim Ahmed", spec: "Cardiology", exp: 15, fee: 1200, qual: "MBBS, MD (Cardiology)" },
  { name: "Fatema Khatun", spec: "Medicine", exp: 10, fee: 800, qual: "MBBS, FCPS (Medicine)" },
  { name: "Karim Uddin", spec: "Neurology", exp: 12, fee: 1500, qual: "MBBS, MD (Neurology)" },
  { name: "Nusrat Jahan", spec: "Pediatrics", exp: 8, fee: 700, qual: "MBBS, FCPS (Pediatrics)" },
  { name: "Hasan Mahmud", spec: "Orthopedics", exp: 14, fee: 1000, qual: "MBBS, MS (Ortho)" },
  { name: "Sadia Islam", spec: "Gynecology", exp: 11, fee: 900, qual: "MBBS, FCPS (Gynae)" },
  { name: "Tanvir Rahman", spec: "Dermatology", exp: 9, fee: 800, qual: "MBBS, DDV" },
  { name: "Ayesha Siddiqua", spec: "ENT", exp: 7, fee: 700, qual: "MBBS, MS (ENT)" },
  { name: "Imran Hossain", spec: "Gastroenterology", exp: 13, fee: 1200, qual: "MBBS, MD (Gastro)" },
  { name: "Farhana Yasmin", spec: "Ophthalmology", exp: 10, fee: 900, qual: "MBBS, FCPS (Eye)" },
  { name: "Rashed Chowdhury", spec: "Psychiatry", exp: 8, fee: 1000, qual: "MBBS, MD (Psychiatry)" },
  { name: "Sharmin Sultana", spec: "Endocrinology", exp: 9, fee: 1100, qual: "MBBS, MD (Endo)" },
  { name: "Mahmudul Hasan", spec: "Urology", exp: 12, fee: 1300, qual: "MBBS, MS (Urology)" },
  { name: "Roksana Parvin", spec: "Nephrology", exp: 10, fee: 1200, qual: "MBBS, MD (Nephro)" },
  { name: "Asif Iqbal", spec: "Pulmonology", exp: 9, fee: 1000, qual: "MBBS, MD (Pulmo)" },
  { name: "Sumaiya Khanam", spec: "Rheumatology", exp: 7, fee: 900, qual: "MBBS, MD (Rheuma)" },
  { name: "Nazmul Huda", spec: "Oncology", exp: 15, fee: 1500, qual: "MBBS, MD (Onco)" },
  { name: "Jannatul Ferdous", spec: "Hematology", exp: 8, fee: 1100, qual: "MBBS, MD (Hemato)" },
  { name: "Shakil Ahmed", spec: "Dentistry", exp: 6, fee: 600, qual: "BDS, MS" },
  { name: "Marium Begum", spec: "General Surgery", exp: 13, fee: 1300, qual: "MBBS, FCPS (Surgery)" },
  { name: "Rafiqul Islam", spec: "Cardiology", exp: 18, fee: 1500, qual: "MBBS, FCPS, MRCP" },
  { name: "Nasrin Sultana", spec: "Medicine", exp: 9, fee: 700, qual: "MBBS, FCPS (Medicine)" },
  { name: "Tariqul Alam", spec: "Neurology", exp: 11, fee: 1400, qual: "MBBS, MD (Neurology)" },
  { name: "Rumana Haque", spec: "Pediatrics", exp: 6, fee: 600, qual: "MBBS, DCH" },
  { name: "Sohel Rana", spec: "Orthopedics", exp: 10, fee: 900, qual: "MBBS, MS (Ortho)" },
  { name: "Tahmina Khatun", spec: "Gynecology", exp: 14, fee: 1100, qual: "MBBS, FCPS (Gynae)" },
  { name: "Mizanur Rahman", spec: "Dermatology", exp: 8, fee: 700, qual: "MBBS, DDV" },
  { name: "Ferdousi Yasmin", spec: "ENT", exp: 9, fee: 800, qual: "MBBS, MS (ENT)" },
  { name: "Alamgir Hossain", spec: "Gastroenterology", exp: 12, fee: 1100, qual: "MBBS, MD (Gastro)" },
  { name: "Shirin Akter", spec: "Ophthalmology", exp: 7, fee: 800, qual: "MBBS, FCPS (Eye)" },
  { name: "Babul Mia", spec: "Psychiatry", exp: 11, fee: 1100, qual: "MBBS, MD (Psychiatry)" },
  { name: "Rubina Parvin", spec: "Endocrinology", exp: 10, fee: 1200, qual: "MBBS, MD (Endo)" },
  { name: "Anwar Hossain", spec: "Urology", exp: 13, fee: 1400, qual: "MBBS, MS (Urology)" },
  { name: "Salma Khatun", spec: "Nephrology", exp: 9, fee: 1000, qual: "MBBS, MD (Nephro)" },
  { name: "Jamal Uddin", spec: "Pulmonology", exp: 12, fee: 1100, qual: "MBBS, MD (Pulmo)" },
  { name: "Parvin Sultana", spec: "Rheumatology", exp: 8, fee: 900, qual: "MBBS, MD (Rheuma)" },
  { name: "Kamal Ahmed", spec: "Oncology", exp: 16, fee: 1600, qual: "MBBS, MD (Onco)" },
  { name: "Halima Khatun", spec: "Hematology", exp: 7, fee: 1000, qual: "MBBS, MD (Hemato)" },
  { name: "Motin Mia", spec: "Dentistry", exp: 5, fee: 500, qual: "BDS" },
  { name: "Nargis Jahan", spec: "General Surgery", exp: 14, fee: 1400, qual: "MBBS, FCPS (Surgery)" },
  { name: "Sajid Hasan", spec: "Cardiology", exp: 11, fee: 1100, qual: "MBBS, MD (Cardiology)" },
  { name: "Rina Begum", spec: "Medicine", exp: 13, fee: 900, qual: "MBBS, FCPS (Medicine)" },
  { name: "Moshiur Rahman", spec: "Neurology", exp: 10, fee: 1300, qual: "MBBS, MD (Neurology)" },
  { name: "Lutfun Nahar", spec: "Pediatrics", exp: 9, fee: 700, qual: "MBBS, FCPS (Pediatrics)" },
  { name: "Habibur Rahman", spec: "Orthopedics", exp: 15, fee: 1100, qual: "MBBS, MS (Ortho)" },
  { name: "Sanjida Islam", spec: "Gynecology", exp: 12, fee: 1000, qual: "MBBS, FCPS (Gynae)" },
  { name: "Mamunur Rashid", spec: "Dermatology", exp: 7, fee: 700, qual: "MBBS, DDV" },
  { name: "Taslima Begum", spec: "ENT", exp: 10, fee: 900, qual: "MBBS, MS (ENT)" },
  { name: "Zahid Hasan", spec: "Gastroenterology", exp: 11, fee: 1000, qual: "MBBS, MD (Gastro)" },
  { name: "Rokeya Sultana", spec: "Ophthalmology", exp: 8, fee: 850, qual: "MBBS, FCPS (Eye)" },
  { name: "Ariful Islam", spec: "Psychiatry", exp: 9, fee: 900, qual: "MBBS, MD (Psychiatry)" },
  { name: "Shahida Parvin", spec: "Endocrinology", exp: 11, fee: 1150, qual: "MBBS, MD (Endo)" },
  { name: "Mokbul Hossain", spec: "Urology", exp: 14, fee: 1450, qual: "MBBS, MS (Urology)" },
  { name: "Rehana Akter", spec: "Nephrology", exp: 8, fee: 950, qual: "MBBS, MD (Nephro)" },
  { name: "Shafiqul Alam", spec: "Pulmonology", exp: 10, fee: 1050, qual: "MBBS, MD (Pulmo)" },
  { name: "Afsana Mimi", spec: "Rheumatology", exp: 6, fee: 800, qual: "MBBS, MD (Rheuma)" },
  { name: "Belal Uddin", spec: "Oncology", exp: 13, fee: 1350, qual: "MBBS, MD (Onco)" },
  { name: "Ruma Khatun", spec: "Hematology", exp: 9, fee: 1050, qual: "MBBS, MD (Hemato)" },
  { name: "Delwar Hossain", spec: "Dentistry", exp: 8, fee: 700, qual: "BDS, MS" },
  { name: "Sultana Razia", spec: "General Surgery", exp: 11, fee: 1150, qual: "MBBS, FCPS (Surgery)" },
  { name: "Enamul Haque", spec: "Cardiology", exp: 14, fee: 1300, qual: "MBBS, MD (Cardiology)" },
  { name: "Marufa Akter", spec: "Medicine", exp: 7, fee: 650, qual: "MBBS, FCPS (Medicine)" },
  { name: "Fazlul Karim", spec: "Neurology", exp: 13, fee: 1450, qual: "MBBS, MD (Neurology)" },
  { name: "Shamima Nasrin", spec: "Pediatrics", exp: 10, fee: 750, qual: "MBBS, FCPS (Pediatrics)" },
  { name: "Golam Mostafa", spec: "Orthopedics", exp: 12, fee: 1050, qual: "MBBS, MS (Ortho)" },
  { name: "Rahima Khatun", spec: "Gynecology", exp: 15, fee: 1200, qual: "MBBS, FCPS (Gynae)" },
  { name: "Hamidul Islam", spec: "Dermatology", exp: 6, fee: 650, qual: "MBBS, DDV" },
  { name: "Sabina Yasmin", spec: "ENT", exp: 11, fee: 950, qual: "MBBS, MS (ENT)" },
  { name: "Ibrahim Khalil", spec: "Gastroenterology", exp: 14, fee: 1250, qual: "MBBS, MD (Gastro)" },
  { name: "Momtaz Begum", spec: "Ophthalmology", exp: 9, fee: 900, qual: "MBBS, FCPS (Eye)" },
  { name: "Jahangir Alam", spec: "Psychiatry", exp: 12, fee: 1150, qual: "MBBS, MD (Psychiatry)" },
  { name: "Rokhsana Parvin", spec: "Endocrinology", exp: 8, fee: 1050, qual: "MBBS, MD (Endo)" },
  { name: "Kabir Ahmed", spec: "Urology", exp: 11, fee: 1250, qual: "MBBS, MS (Urology)" },
  { name: "Nasima Akter", spec: "Nephrology", exp: 10, fee: 1100, qual: "MBBS, MD (Nephro)" },
  { name: "Liton Mia", spec: "Pulmonology", exp: 8, fee: 950, qual: "MBBS, MD (Pulmo)" },
  { name: "Papia Sultana", spec: "Rheumatology", exp: 9, fee: 1000, qual: "MBBS, MD (Rheuma)" },
  { name: "Manjurul Islam", spec: "Oncology", exp: 17, fee: 1700, qual: "MBBS, MD (Onco)" },
  { name: "Sultana Ahmed", spec: "Hematology", exp: 6, fee: 900, qual: "MBBS, MD (Hemato)" },
  { name: "Nazrul Islam", spec: "Dentistry", exp: 7, fee: 650, qual: "BDS" },
  { name: "Shahnaz Parvin", spec: "General Surgery", exp: 12, fee: 1250, qual: "MBBS, FCPS (Surgery)" },
  { name: "Omar Faruk", spec: "Cardiology", exp: 16, fee: 1400, qual: "MBBS, MD (Cardiology)" },
  { name: "Umme Habiba", spec: "Medicine", exp: 11, fee: 850, qual: "MBBS, FCPS (Medicine)" },
  { name: "Rabiul Islam", spec: "Neurology", exp: 9, fee: 1250, qual: "MBBS, MD (Neurology)" },
  { name: "Shirin Sultana", spec: "Pediatrics", exp: 7, fee: 650, qual: "MBBS, FCPS (Pediatrics)" },
  { name: "Sabbir Ahmed", spec: "Orthopedics", exp: 13, fee: 1150, qual: "MBBS, MS (Ortho)" },
  { name: "Nusrat Parvin", spec: "Gynecology", exp: 10, fee: 950, qual: "MBBS, FCPS (Gynae)" },
  { name: "Tuhin Mia", spec: "Dermatology", exp: 5, fee: 600, qual: "MBBS, DDV" },
  { name: "Hasina Begum", spec: "ENT", exp: 13, fee: 1050, qual: "MBBS, MS (ENT)" },
  { name: "Uzzal Hossain", spec: "Gastroenterology", exp: 10, fee: 1100, qual: "MBBS, MD (Gastro)" },
  { name: "Jesmin Akter", spec: "Ophthalmology", exp: 8, fee: 850, qual: "MBBS, FCPS (Eye)" },
  { name: "Wahiduzzaman", spec: "Psychiatry", exp: 14, fee: 1350, qual: "MBBS, MD (Psychiatry)" },
  { name: "Rumi Khatun", spec: "Endocrinology", exp: 7, fee: 1000, qual: "MBBS, MD (Endo)" },
  { name: "Yusuf Ali", spec: "Urology", exp: 12, fee: 1300, qual: "MBBS, MS (Urology)" },
  { name: "Zakia Sultana", spec: "Nephrology", exp: 9, fee: 1050, qual: "MBBS, MD (Nephro)" },
  { name: "Abul Kalam", spec: "Pulmonology", exp: 11, fee: 1100, qual: "MBBS, MD (Pulmo)" },
  { name: "Beauty Akter", spec: "Rheumatology", exp: 6, fee: 850, qual: "MBBS, MD (Rheuma)" },
  { name: "Motiur Rahman", spec: "Oncology", exp: 12, fee: 1300, qual: "MBBS, MD (Onco)" },
  { name: "Chandni Begum", spec: "Hematology", exp: 8, fee: 1000, qual: "MBBS, MD (Hemato)" },
  { name: "Dulal Mia", spec: "Dentistry", exp: 9, fee: 750, qual: "BDS, MS" },
  { name: "Dilara Khatun", spec: "General Surgery", exp: 13, fee: 1350, qual: "MBBS, FCPS (Surgery)" },
];

async function main() {
  console.log("🗑️  Cleaning old doctors...\n");
  
  // Delete all doctors and their users
  await prisma.prescription.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.user.deleteMany({ where: { role: "DOCTOR" } });

  console.log("🌱 Seeding 100 unique doctors...\n");

  const hashedPassword = await bcrypt.hash("doctor123", 10);
  let created = 0;

  for (let i = 0; i < doctors.length; i++) {
    const doc = doctors[i];
    const email = `doctor${i + 1}@shasthosheba.com`;
    const phone = `017${String(10000000 + i).slice(-8)}`;

    const startHour = 9 + (i % 4);
    const duration = 4 + (i % 3);
    const endHour = startHour + duration;

    const startTime = `${String(startHour).padStart(2, "0")}:00`;
    const endTime = `${String(endHour).padStart(2, "0")}:00`;

    await prisma.user.create({
      data: {
        name: doc.name,
        email,
        password: hashedPassword,
        phone,
        role: "DOCTOR",
        doctor: {
          create: {
            specialization: doc.spec,
            qualification: doc.qual,
            experience: doc.exp,
            fee: doc.fee,
            availableDays: "Sat,Sun,Mon,Tue,Wed,Thu",
            startTime,
            endTime,
            bio: `${doc.spec} specialist with ${doc.exp} years of experience.`,
          },
        },
      },
    });

    created++;
    if (created % 10 === 0) {
      console.log(`✅ ${created} doctors added...`);
    }
  }

  console.log(`\n🎉 Done!`);
  console.log(`   ✅ Created: ${created} unique doctors`);
  console.log(`\n📝 All doctors password: doctor123\n`);
}

main()
  .catch((e) => { console.error("❌ Error:", e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
