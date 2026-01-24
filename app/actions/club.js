"use server";

import { prisma } from "@/lib/prisma";

export async function getClubs() {
  const clubs = await prisma.club.findMany();

  // Check if season started (any team played > 0)
  const seasonStarted = clubs.some((club) => club.played > 0);

  let sortedClubs;

  // BEFORE MATCHES → Alphabetical
  if (!seasonStarted) {
    sortedClubs = clubs.sort((a, b) =>
      a.clubName.localeCompare(b.clubName)
    );
  }

  // AFTER MATCHES → Football Rules
  else {
    sortedClubs = clubs.sort((a, b) => {
      // 1. Points
      if (b.points !== a.points) {
        return b.points - a.points;
      }

      // 2. Goal Difference
      if (b.goal_diff !== a.goal_diff) {
        return b.goal_diff - a.goal_diff;
      }

      // 3. Goals Scored
      if (b.goals_scored !== a.goals_scored) {
        return b.goals_scored - a.goals_scored;
      }

      // 4. Alphabetical
      return a.clubName.localeCompare(b.clubName);
    });
  }

  console.log(sortedClubs);
  return sortedClubs;
}
