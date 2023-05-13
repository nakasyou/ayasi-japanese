import { serve } from 'https://deno.land/std@0.187.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v3.2.0-rc.2/mod.ts'

import ayasi from "./ayasi/index.ts"

const app = new Hono()

app.get('/', c => c.json({
  title: "怪レい日本语",
  soucecode: "https://github.com/nakasyou/ayasi-japanese",
}))
app.get('/api', ayasi)

serve(app.fetch)
