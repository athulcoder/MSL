import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma.js";

export  async function PUT(req){
    
    //verify session id 
    const {searchParams} = new URL(req.url);

    const adminId = searchParams.get('adminid');

    if(!adminId){
        return NextResponse.error("Not authenticated ");
    }

    //update data
    const club = await req.json();

   const updatedClub = await prisma.club.update({
        where:{id:club.id},
        data:{
            draw:club.draw,
            lost:club.lost,
            won:club.won,
            played:club.played,
            goal_diff:club.goal_diff,
            goals_scored:club.goals_scored,
            points:club.points
        }
    });

    if(updatedClub){
        return NextResponse.json({
            type:"success",
            status:200,
            message:"data updated "
        })
    }

    return NextResponse.json({
        type:"error",
        status:401,
        message:"Error occured"
    })
}