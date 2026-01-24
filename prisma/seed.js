
import { prisma } from "../lib/prisma.js";



async function main() {
  const clubs = [
    { clubName: "Flamengos" ,logoUrl:"https://mitssuperleague.vercel.app/flamigos.jpg"},
    { clubName: "Botafago",logoUrl:"https://mitssuperleague.vercel.app/botafago.jpg" },
    { clubName: "Atlanta" ,logoUrl:"https://mitssuperleague.vercel.app/atlanta.png"},
    { clubName: "Ajax" ,logoUrl:"https://mitssuperleague.vercel.app/ajax.png"},
    { clubName: "Wolves" ,logoUrl:"https://mitssuperleague.vercel.app/wolves.jpg"},
    { clubName: "Celtics" ,logoUrl:"https://mitssuperleague.vercel.app/celitics.png"},
    { clubName: "Palmeras", logoUrl:"https://mitssuperleague.vercel.app/palmeras.jpg"},
    { clubName: "Wrexham" ,logoUrl:"https://mitssuperleague.vercel.app/wrexham.jpg"},
  ];

  
  for (const club of clubs) {
    await prisma.club.create({
      data: club,
    });
  }

  console.log("✅ Clubs seeded successfully");

  const admin = {
    
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });