import { serverSupabaseUser } from "#supabase/server"

const data = [
    {id: 0, content: "Test blog (work in progress)"},
    {id: 1, content: "Test blog (work in progress)"},
    {id: 2, content: "Test blog (work in progress)"},
    {id: 3, content: "Test blog (work in progress)"},
    {id: 4, content: "Test blog (work in progress)"},
]

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    if (!user){
        throw createError({ statusCode: 401, message: 'Unauthorized' })
    }

    return data
})