export async function saveDataToDB(id,data){

    const clubData = data.filter(data=>data.id===id);
    console.log(clubData)
    const res = await fetch("/api/save",{
        method:"PUT",
        body:JSON.stringify({
            id:clubData[0].id,
            draw:clubData[0].d,
            lost:clubData[0].l,
            won:clubData[0].w,
            points:clubData[0].pts,
            played:clubData[0].pl,
            goal_diff:clubData[0].gd,
            goals_scored:clubData[0].goal_scored
        })
    });

    return res;
}