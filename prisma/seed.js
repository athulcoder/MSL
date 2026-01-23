
import { prisma } from "../lib/prisma.js";



async function main() {
  const clubs = [
    { clubName: "Flamengos" },
    { clubName: "Botafago" },
    { clubName: "Atlanta" },
    { clubName: "Ajax" },
    { clubName: "Wolves" },
    { clubName: "Celtics" },
    { clubName: "Palmeras" },
    { clubName: "Wrexham" },
  ];

  for (const club of clubs) {
    await prisma.club.create({
      data: club,
    });
  }

  console.log("✅ Clubs seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });