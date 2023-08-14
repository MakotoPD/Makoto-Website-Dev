import { serverSupabaseUser } from "#supabase/server"

const data = [
    {id: 0, email: 'patrydab4@gmail.com', content: "my blog 1"},
    {id: 1, email: 'patrydab4@gmail.com', content: "my blog 2"},
    {id: 2, email: 'patrydab4@gmail.com', content: "my blog 3"},
    {id: 3, email: 'makoto.kontakt@gmail.com', content: "my blog 4"},
    {id: 4, email: 'patrydab4@gmail.com', content: "my blog 5"},
]

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    if (!user){
        throw createError({ statusCode: 401, message: 'Unauthorized' })
    }

    return data.filter((blog) => blog.email === user.email)
})