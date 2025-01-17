import { supabase } from "@/utils/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select('id, quote, category');

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch quotes' }),
      { status: 500 }
    );
  }
}
