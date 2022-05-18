import { client, parseData } from './client'

export async function getBuilds() {
    const request = await client
        .from('builds')
        .select(`
        id, name,
        level, summary,
        weapons, shields,
        armor, talismans,
        primary_stats,
        secondary_stats,
        skills, spells,
        min_str, min_dex,
        min_int, min_fth,
        min_arc, notes,
        created_at, user_id
        `);

        const data = parseData(request);

        return data.map(({ 
            id, name, level, summary, 
            weapons, shields, armor, 
            talismans, primary_stats, 
            secondary_stats, skills, 
            spells, min_str, min_dex, 
            min_int, min_fth, min_arc, 
            notes, created_at, user_id 
        }) => ({
            id, name, level, summary, 
            weapons, shields, armor, 
            talismans, skills, spells,
            notes,
            primaryStats: primary_stats, 
            secondaryStats: secondary_stats,
            minStr: min_str, 
            minDex: min_dex, 
            minInt: min_int, 
            minFaith: min_fth, 
            minArc: min_arc, 
            created: created_at, 
            userId: user_id 
        }));
}

export async function createBuild(build) {
    const request = await client
        .from('builds')
        .insert(build)
        .single();

    return parseData(request);
}