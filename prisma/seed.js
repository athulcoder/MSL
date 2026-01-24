
import { prisma } from "../lib/prisma.js";



async function main() {
  const clubs = [
    { clubName: "Flamengos" ,logoUrl:"/flamigos.jpg"},
    { clubName: "Botafago",logoUrl:"/botafago.jpg" },
    { clubName: "Atlanta" ,logoUrl:"/atlanta.png"},
    { clubName: "Ajax" ,logoUrl:"/ajax.png"},
    { clubName: "Wolves" ,logoUrl:"/wolves.jpg"},
    { clubName: "Celtics" ,logoUrl:"/celitics.png"},
    { clubName: "Palmeras", logoUrl:"/palmeras.jpg"},
    { clubName: "Wrexham" ,logoUrl:"/wrexham.jpg"},
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