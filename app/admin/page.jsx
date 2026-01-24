import EditableTable from '@/components/EditableTable'
import React from 'react'
import { getClubs } from '../actions/club.js';


export const dynamic = "force-dynamic";
export default async function Page() {

      const clubs = await getClubs();
    
      // Convert DB data → UI format
const teams = clubs.map((club, index) => ({
  id: club.id,
  name: club.clubName,
  logo: club.logoUrl || "/club.png",

  pl: Number(club.played),
  w: Number(club.won),
  d: Number(club.draw),
  l: Number(club.lost),

  gd: Number(club.goal_diff), // ✅ NUMBER ONLY

  pts: Number(club.points),
}));
  return (
    <EditableTable teams={teams}/>
  )
}

